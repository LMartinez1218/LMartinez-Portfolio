import React from "react";


function About () {
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About Lauren</h1>
                    <div className="underline-border">
                    </div>
                    <div className="row g-650 alignCenter">
                        <div className="col-6">
                            <div className="about_img">
                                <img src="./images/resize.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about_info">
                                <h1><br />Tech savvy | Full-Stack Developer <br /> based in New York,NY<br /></h1>
                                <div className="about_info">
                                    <p>Lauren is a motivated software       developer, and problem solver.
                                        She is very fluent in Front-End design
                                        <br /> but exudes strength in Back-End database creation.<br /> After the pandemic she found herself wanting to switch career paths,
                                        <br /> Enrolling in Upright Education gave her the foundation to master the art of code.
                                        <br /> There she gained technical problem solving skills.
                                        <br /> Some of her hobbies include  photography, traveling, cooking and Lego building.</p>
                                        <div className="about_buttons">
                                            <a href="#about" className="btn btn-outline">Download CV</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;