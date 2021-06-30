import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div id = "ed">
        <div className = "edu-wrapper">
            <text>
            <span style = {{
                fontSize: "30px",
                fontWeight: "500"
            }}>
                My Education
            </span>
            <ul className = "edus">
                <li className = "edu">
                    <b>Bachelors in Technology</b>
                    <br></br><i style = {{color: "black"}}>(ECE-Regular)</i>
                    <br></br>
                    Feroze Gandhi Institute of
                    <br></br>Engineering and Technology
                    <br></br>
                    <span style = {{fontSize: "10px"}}>08/2016 - 09/2020</span>
                    <span style = {{fontSize: "10px", marginLeft: "70px"}}>8.34CGPA</span>
                </li>
                <li className = "edu">
                <b>Intermediate</b>
                    <br></br>
                    BBL Public School
                    <br></br>
                    <span style = {{fontSize: "10px"}}>04/2014 - 05/2015</span>
                    <span style = {{fontSize: "10px", marginLeft: "82px"}}>80.40%</span>
                </li>
                <li className = "edu">
                <b>High School</b>
                    <br></br>
                    Sacred Hearts Public School
                    <br></br>
                    <span style = {{fontSize: "10px"}}>04/2012 - 05/2013</span>
                    <span style = {{fontSize: "10px", marginLeft: "80px"}}>10CGPA</span>
                </li>
            </ul>
            </text>
            <div className = "edu-image">
            
            </div>
        </div>
        </div>
    )
}

export default Education
