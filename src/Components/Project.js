import React from 'react';
import Notetaker from '../assets/Notetaker.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'
import RecipeFinder from '../assets/RecipeFinder.png'
import ScheduleChallenge from '../assets/Schedule.png'
import TriviaWar from '../assets/TriviaWar.png'
import SocialNetwork from '../assets/SocialNetwork.png'
import KickItOff from '../assets/KickItOff.png'
import '../styles/projects.css'


function Project() {
    return (
        <div id="Projects" className="row justify-content-center">
            <ul className='image-gallery'>
                <a href="https://rpape3.github.io/Trivia-War/" className="col-md-6 col-lg-4 mb-5" >
                    <img className='image-fluid' src={TriviaWar} alt="TriviaWar" />
                </a>

                <a href="https://sneakerheadshop.herokuapp.com/" className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={KickItOff} alt="ShoeStore" />
                </a>

                <a href="https://whispering-temple-78267.herokuapp.com" className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={RecipeFinder} alt="RecipeFinder" />
                </a>

                <a href="https://jsumbak.github.io/ScheduleChallenge/" className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={ScheduleChallenge} alt="ScheduleChallenge" />
                </a>

                <a href="https://jsumbak.github.io/PasswordGenerator/" className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={PasswordGenerator} alt="PasswordGenerator" />
                </a>
                <a href="https://dry-coast-38609.herokuapp.com/" className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={Notetaker} alt="Notetaker" />
                </a>
                <a  href="../assets/SocialNetwork.png"  className="col-md-6 col-lg-4 mb-5">
                    <img className='image-fluid' src={SocialNetwork} alt="Notetaker" />
                </a>
            </ul>
        </div>
        
    )
}

export default Project;
