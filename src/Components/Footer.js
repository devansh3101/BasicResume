import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id = "f">
            <div className = "footer-container">
                Contact Me
                <div className = "icons">
                    <span><i class="fas fa-envelope"></i> mkaran0015@gmail.com</span>
                    
                    <div className = "social">
                    <a href = "https://www.linkedin.com/in/karan-maheshwari-9b69871a1/" target = "_blank"><i class="fab fa-linkedin"></i></a>
                    <a href = "https://github.com/mkaran15" target = "_blank"><i class="fab fa-github-square"></i></a>
                    <a href = "https://www.instagram.com/mkaran27/" target = "_blank"><i class="fab fa-instagram-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
