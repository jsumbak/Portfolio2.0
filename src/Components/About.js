import React from 'react';
import '../styles/about.css'
import me from '../assets/Juliet.jpeg'

function About() {
    return (
        <div id="About">
            <img src={me} alt="portfoliopicture" className="center"/>
            <p>Welcome to my website! I'm Juliet Sumba and I'm a Software Developer with experience in front-end and back-end development. My passion lies in front-end development where I can visually show my skills for creativity and design to give users the best interface experience.
            <br></br>
            <br></br>    
            <p>Below are a few of the projects i've created.</p>
            <p1>*Click on the image to view the application</p1>
            <br></br> 
            <br></br>
            </p>
        </div>
    )
}

export default About;
