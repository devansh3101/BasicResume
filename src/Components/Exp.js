import React from 'react'
import './Exp.css'

const Exp = () => {
    return (
        <div id = "e">
            <div className = "exp-wrapper">
            <div className = "exp-image">
            
            </div>
            <text>
            <span style = {{
                fontSize: "30px",
                fontWeight: "500"
            }}>
                Work Experience
            </span>
            <ul className = "exps">
                <li className = "exp">
                    <strong>HCL TECHNOLOGY</strong>
                    <br></br>
                    <i style = {{color: "black"}}>(Operating Security Team)</i>
                    <br></br>
                    12 NOV - PRESENT
                    <br></br>
                    <i class="fas fa-arrow-right" style = {{color: "black"}}></i> Symantec Endpoint Protection
                </li>
            </ul>
            </text>
        </div>
        </div>
    )
}

export default Exp
