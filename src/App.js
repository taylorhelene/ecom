import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter as Router, NavLink } from "react-router-dom";

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';

import Context from "./Context";

import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import HomePage from "./components/HomePage";
import HomePage from "./components/ContactUs";
import Footer from "./components/SharedUtils/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
      showMenu: false
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");
  
    const products = await axios.get('http://localhost:3001/products');
    user = user ? JSON.parse(user) : null;
    cart = cart? JSON.parse(cart) : {};
  
    this.setState({ user,  products: products.data, cart });
  }

  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
  
    if(res.status === 200) {
      const { email } = jwtDecode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };
  
  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }
  
    const cart = this.state.cart;
  
    const products = this.state.products.map(p => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;
  
        axios.put(
          `http://localhost:3001/products/${p.id}`,
          { ...p },
        )
      }
      return p;
    });
  
    this.setState({ products });
    this.clearCart();
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App p-2">
          <nav
            className="navbar navbar-expand-lg position-relative container-fluid rounded p-2 m-2"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <img className="navbar-item is-size-4 object-fit-contain App-logo " src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
              <label
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu container-fluid d-flex justify-content-center ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <ul className="nav nav-pills navbar-item ">
                  <li className="nav-item m-2">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item m-2" >
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  {this.state.user && this.state.user.accessLevel < 1 && (
                    <li className="nav-item m-2">
                      <NavLink
                        to="/add-product"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'active' : ''}`
                        }
                      >
                        Add Product
                      </NavLink>
                    </li>
                  )}
                  
                  
                  <li className="nav-item m-2">
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Cart
                      <span
                        className="tag is-primary"
                        style={{ marginLeft: '5px' }}
                      >
                        {Object.keys(this.state.cart).length}
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item m-2">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                  
              </div>

              {!this.state.user ? (
                    <button className="position-absolute top-0 end-0 d-flex navbar-item rounded-pill">
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'active' : ''}`
                        }
                      >
                        Log in
                      </NavLink>
                    </button>
                  ) : (
                    <button className="position-absolute top-0 end-0 d-flex navbar-item rounded-pill">
                      <NavLink
                        to="/"
                        onClick={this.logout}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'active' : ''}`
                        }
                      >
                        Log out
                      </NavLink>
                    </button>
                  )}
                
            </nav>
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
        <Footer/>
      </Context.Provider>
    );
  }
}