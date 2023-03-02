import React from "react";
import { FaEnvelope,  } from "react-icons/fa";

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        {/* <div className="footer-section-logo">
                            <img src="./images/Logo-L.png.png" alt="" />
                        </div> */}
                        <ul className="footerCircles">
                            <li><FaEnvelope className="footerIcon"/></li>
                        </ul>
                        <div className="copy-right-content">
                            <p className="copyright">Copyright {new Date().getFullYear()} learndailyteam.com | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;