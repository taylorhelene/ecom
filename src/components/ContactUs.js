import React from "react";
import withContext from "../withContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const ContactUs = props => {
    return(
        <div className="container-fluid">
            
                <div className="d-flex justify-content-center container">
                    <h4 className="title">Contact Us</h4>
                </div>
          
            <form  method="post" className="d-flex justify-content-center p-4 m-4" data-aos="fade-up" data-aos-delay="600">
                <div className="row gy-4">
                    <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                    </div>
                    <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                    </div>
                    <div className="col-md-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                    </div>

                    <div className="col-md-12 text-center"></div>
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <div  align='center'>
                        <button className="rounded-pill"  type="submit">Send Message</button>  
                    </div>

                </div>
            </form>

        </div>
    )
}
       

export default withContext(ContactUs);