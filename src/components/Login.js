import React, { Component } from "react";
import { Navigate } from "react-router-dom"; // Updated from Redirect to Navigate
import withContext from "../withContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password).then((loggedIn) => {
      if (!loggedIn) {
        this.setState({ error: "Invalid Credentials" });
      }
    });
  };

  render() {
    return !this.props.context.user ? (
      <>
        <div className="container-fluid">
          <div className="d-flex justify-content-center container">
            <h4 className="title">Login</h4>
          </div>
        </div>
        <form onSubmit={this.login} className='d-flex justify-content-center container p-3 data-aos="fade-up" data-aos-delay="600"'>
          <div className="row gy-4 d-flex justify-content-center ">
            <label className="label">Email: </label>

            <input 
              className="col-md-6 input"
              type="email" 
              name="username" 
              className="input" 
              placeholder="Your Name"                   
              onChange={this.handleChange}
              required=""/>
                
            <label className="label">Password: </label>
            <input
              className="col-md-6 input"
              type="password"
              name="password"
              onChange={this.handleChange}
              required=""/>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="rounded-pill"
                >
                  Submit
                </button>
              </div>
              </div>
        </form>
      </>
    ) : (
      <Navigate to="/products" /> // Updated from Redirect to Navigate
    );
  }
}

export default withContext(Login);
