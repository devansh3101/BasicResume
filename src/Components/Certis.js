import React from 'react'
import './Certis.css'

const Certis = () => {
    return (
        <div id = "c">
        <div className = "certi-wrapper">
            <div className = "certiImage"></div>
            <div className = "cc">
                <div className = "certi-text">
                    <div className = "title"> Achievements </div>
                    <ul className = "certis">
                        <li>
                            <span style = {{fontWeight: "500"}}>Runner-up (08/2016 - 09/2020)</span>
                            <br></br>
                            <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                                Two times runner-up in Zonal(Basketball) -AKTU Lucknow zone
                            </span>
                        </li>
                        <li>
                            <span style = {{fontWeight: "500"}}>Tech-Volunteer (08/2020 - Present)</span>
                            <br></br>
                            <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                            Debugging python codes of participant and learning along with them.

                            </span>
                        </li>
                    </ul>
                </div>
                <div className = "certi1-text">
                <div className = "title"> Certifications </div>
                <ul className = "certis">
                    <li>
                        <span style = {{fontWeight: "500"}}>Networking Essentials - CISCO netcad academy (01/2021 - 03/201)</span>
                        <br></br>
                        <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                            Build a simple computer network using cisco device
                        </span>
                    </li>
                    <li>
                        <span style = {{fontWeight: "500"}}>Expertise in Docker -IIEC Rise (02/2020 - 05/2020)</span>
                        <br></br>
                        <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                            Orchestration of Multi-container application using Docker-compose.
                        </span>
                    </li>
                    <li>
                        <span style = {{fontWeight: "500"}}>Career Edge - TCS (06/2020 - 06/2020)</span>
                        <br></br>
                        <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                            Email Etiquette, Telephone Etiquette
                        </span>
                    </li>
                    <li>
                        <span style = {{fontWeight: "500"}}>Python Programming Essentials - CISCO netcad academy (05/2020 - 07/2020)</span>
                        <br></br>
                        <span style = {{fontSize: "12px", marginLeft: "10px", opacity: "0.5"}}>
                        Keywords, Literals, Data Structure(list, tuple, dictionary, set), Numpy array, Pandas, class-object, __init__ constructor, super(), lamda function
                        </span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Certis
