import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div id = "p">
        <div className = "projects-wrapper">
            <div className = "projects-text">
                <div className = "title"> The Projects I've Worked On</div>
                <ul className = "projects">
                    <div className = "row1">
                    <li>
                        Home Automation Using PIC Microcontroller (06/2018 - 08/2018)
                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>Using IR sensor, 40 pin PIC 16FA887 microcontroller and LED forindication
                        </span>
                    </li>
                    <li>
                    Orchestration of Multi-container application using Docker-compose (02/2020 - 05/2020)
                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>
                            Using Docker compose
                        </span>
                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>
                            Docker volume, Centos lates image
                        </span>
                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>
                            Linked wordpress with mysql and expose to port 80
                        </span>
                    </li>
                    </div>
                    <div className = "row2">
                    <li>
                        Hosting a website by creating a pipeline using Jenkins along with the use of Git, Redhat, HTTPD server (07/2020 - 07/2020)
                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>
                            As the developer pushed his code to GitHub the Jenkins download the code into its workspace using Triggers,
                            and then using shell scripting we can copy the code into the /var/www/html folder. There are others job that
                            run in between them. 
                        </span>
                    </li>
                    <li>
                    Dark mode/Light mode || Read more/Read less using JavaScript (08/2020 - 08/2020)

                    </li>
                    </div>
                    <li>
                    Integration of Redhat && Docker with Python (08/2020 - Present)

                        <br></br>
                        <span style = {{fontSize: "12px"}}>
                            <i class="fas fa-check-circle" style = {{color: "black", marginRight: "10px", marginLeft: "5px"}}></i>
                            To run redhat command by giving input to python program(usind OS module) and also run container using the same
                            just by giving container name and image you want to use instead of running the whole command as the python
                            program will do it for you. 
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Projects
