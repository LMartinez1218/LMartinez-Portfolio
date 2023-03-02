import React from "react";


function Header () {
    return(
        <header className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello I am</h2>
                                <h1>Lauren Martinez</h1>
                                <p>Software Developer <br /> Javascript | React.js | HTML/CSS</p>
                                <div className="header_buttons">
                                    <a href="header" className="btn btn-outline">Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./images/Lauren-transformed.png" alt="" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;