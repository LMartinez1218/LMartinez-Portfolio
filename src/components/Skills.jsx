import React from "react";


function Skills () {

    const header = {
        mainHeader: "My Expertise",
        subHeading: "Providing various technical skills",
    };

    const state = [
        {
            id: 1,
            icon: './images/monitor-transformed.png',
            heading: "React.js",
            text: "Crafting and implementing UI components to integrate with Javascript web applications"
        },
        {
            id: 2,
            icon: './images/html.transformed.png',
            heading: "Back-End engineering",
            text: "Database creation using POSTMAN and MongoDB"
        },
        {
            id: 3,
            icon: './images/monitor-transformed.png',
            heading: "HTML/CSS/SASS",
            text: "Experience creating web pages with standard languages"
        },
        {
            id: 4,
            icon: './images/html.transformed.png',
            heading: "Javascript",
            text: "Implementing complex features on web pages"
        },
        {
            id: 5,
            icon: './images/monitor-transformed.png',
            heading: "LiveCharts",
            text: "Using LiveCharts for updates and animation with data that changes in real time"
        },
        {
            id: 6,
            icon: './images/html.transformed.png',
            heading: "AWS",
            text: "Experience with using cloud platform on projects"
        }

    ]
    return (
        <div className="skills">
            <div className="skills_header">
                <div className="common">
                    <h6 className="heading">{header.mainHeader}</h6>
                    <h2 className="subheading">{header.subHeading}</h2>
                    <div className="commonBorder"></div>
                    
                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="skills_box">
                                    <img src={info.icon} alt="" className="commonIcons" />
                                    <h4 className="skills_box-header">{info.heading}</h4>
                                    <p className="skills_box-p">{info.text}</p>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;