import React from 'react';
import './About.css';
import Footer from './Footer';

const About = () => {
    return (
        <div id = "a">
        <div className = "about-container">
            <div className = "image">

            </div>
            <div className = "text">
                "I am willing to learn
                <span
                    style = {{
                        marginLeft: "3px",
                        fontSize: "30px"
                }}>
                    new technology
                </span>
                <br></br>
                and am
                <span
                    style = {{
                        marginLeft: "3px",
                        fontSize: "45px"
                }}>
                     passionate
                </span>
                <br style = {{
                    lineHeight: "-5px"
                }}></br>
                about developing
                <span
                    style = {{
                        marginLeft: "3px",
                        fontSize: "30px"
                }}>
                    new skills"
                </span>
            </div>
        </div>
        </div>
    )
}

export default About
