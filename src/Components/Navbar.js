import React from 'react'
import '../styles/navbar.css'
// import { Link } from 'react-router-dom'
import Resume from '../assets/Resume.pdf'
  
const NavBar = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <a href="#About">About</a>
                    <a href="#Projects" >Projects</a>
                    <a href="#Contact">Contact</a>
                    <a href={Resume} download={true}>Resume</a>
                </ul>
            </nav> 
        </div>           
    )
}
export default NavBar;