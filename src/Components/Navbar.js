import React from 'react'
import '../styles/navbar.css'
// import { Link } from 'react-router-dom'
  
const NavBar = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <a href="#About">About</a>
                    <a href="#Projects" >Projects</a>
                    <a href="#Contact">Contact</a>
                    <a href="/assets/Resume.pdf" target="_blank">Resume</a>
                </ul>
            </nav> 
        </div>           
    )
}
export default NavBar;