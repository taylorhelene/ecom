import React from "react";
import withContext from "../../withContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Footer = props => {
    return(
        <div className="container">
             <div className="row">
                <div className="col-sm">
                    <p className="subtitle">About</p>
                </div>
                <div className="col-sm">
                    <p className="subtitle">About</p>
                </div>
                <div className="col-sm">
                    <p className="subtitle">About</p>
                </div>
                <div className="col-sm">
                    <p className="subtitle">About</p>
                </div>
            </div>
        </div>
    )
}

export default withContext(Footer);