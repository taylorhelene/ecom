import React from "react";
import withContext from "../../withContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Footer = props => {
    return(
        <div className="container-fluid App">
             <div className="row">
                <div className="col-sm">
                    <h5 className="subtitle">About</h5>
                </div>
                <div className="col-sm">
                    <h5 className="subtitle">About</h5>
                </div>
                <div className="col-sm">
                    <h5 className="subtitle">About</h5>
                </div>
                <div className="col-sm">
                    <h5 className="subtitle">About</h5>
                </div>
            </div>
        </div>
    )
}

export default withContext(Footer);