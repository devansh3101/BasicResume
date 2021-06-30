import React from 'react'
import {Link} from 'react-scroll';
import { useState, useEffect } from 'react';
import './Navbar.css'

const Navbar2 = () => {

    const [menu, setMenu] = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const updateMenu = () => {
        if(window.innerWidth < 1000){
            setMenu(true);
        } else{
            setClick(false);
            setMenu(false);
        }
    }

    useEffect(() => {
        updateMenu();
        window.addEventListener("resize", updateMenu);
    }, [])
    

    return (
        <div className = "navbar">
            <div className = "navbar-container">
                <Link to="h" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "navbar-home"
                 style = {{cursor: "pointer"}}>
                    <i class="fas fa-home" style = {{cursor: "pointer"}} ></i>
                </Link>  
                 <div className = {menu? "menu-icon" : "menu-icon-hidden"} onClick = {handleClick} >
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? "menu-items-dropdown" : !menu ? "menu-items" : "menu-items-resp"}>
                    <li className = "menu-item">
                        <Link to = "a" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "nav-links"
                        onClick = {closeMobileMenu}>About</Link>
                    </li>
                    <li className = "menu-item">
                        <Link to = "s" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  className = "nav-links"
                        onClick = {closeMobileMenu}>Skills</Link>
                    </li>
                    <li className = "menu-item">
                        <Link to = "e" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "nav-links"
                        onClick = {closeMobileMenu}>Experience</Link>
                    </li>
                    <li className = "menu-item">
                        <Link to = "ed" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "nav-links"
                        onClick = {closeMobileMenu}>Education</Link>
                    </li>
                    <li className = "menu-item">
                        <Link to = "p" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "nav-links"
                        onClick = {closeMobileMenu}>Projects</Link>
                    </li>
                    <li className = "menu-item">
                        <Link to = "c" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className = "nav-links"
                        onClick = {closeMobileMenu}>Certifications</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar2
