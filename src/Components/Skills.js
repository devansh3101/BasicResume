import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div id = "s">
        <div className = "skills-wrapper">
            <text>
            <span style = {{
                fontSize: "30px",
                fontWeight: "500"
            }}>
                My skills
            </span>
            <ul className = "skills">
                <li className = "skill">
                    REHL v8
                </li>
                <li className = "skill">
                    Python
                </li>
                <li className = "skill">
                    Docker-Container
                </li>
                <li className = "skill">
                    Jenkins
                </li>
                <li className = "skill">
                    Networking Essentials
                </li>
                <li className = "skill">
                    Packet Tracer
                </li>
                <li className = "skill">
                    AWS || Terraform
                </li>
            </ul>
            </text>
            <div className = "skills-image">
            
            </div>
        </div>
        </div>
    )
}

export default Skills
