import React from 'react';
import './Home.css';
// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll'
import About from './About';
import Skills from './Skills';
import Exp from './Exp';
import Education from './Education';
import Certis from './Certis';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
    return (
        <div id = "h">
        <div className = "hero-container">
            <div className = "Name" style = {{lineHeight: "40px"}}>
               KARAN MAHESHWARI
            </div>
            <div className = "WhatIDo" style = {{marginTop: "5px"}} >
                 ELECTRONICS AND <br></br>COMMUNICATION ENGINEER
           </div> 
           {/* <Link to = '/about'> */}
           <Link to = "a" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
           <div className = "Button">
               Know More About Me <i class="fas fa-chevron-right"></i>
            </div> 
            </Link>  
        </div>
        <div className = "About">
            <About/>
        </div>
        <div className = "Skills">
            <Skills />
        </div>
        <div className = "Experience">
            <Exp />
        </div>
        <div className = "Education">
            <Education />
        </div>
        <div className = "Projects">
            <Projects />
        </div>
        <div className = "Certifications">
            <Certis />
        </div>
        <div className = "Footer">
            <Footer />
        </div>
        </div>
    )
}

export default Home
