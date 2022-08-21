import React from 'react';
import Notetaker from '../assets/Notetaker.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'
import RecipeFinder from '../assets/RecipeFinder.png'
import ScheduleChallenge from '../assets/Schedule.png'
import TriviaWar from '../assets/TriviaWar.png'
import '../styles/projects.css'


function Project() {
    return (
        <div>
            <ul className='image-gallery'>
                <a href="https://rpape3.github.io/Trivia-War/">
                    <img className='image-fluid' src={TriviaWar} alt="TriviaWar" />
                </a>

                <a href="https://whispering-temple-78267.herokuapp.com">
                    <img className='image-fluid' src={RecipeFinder} alt="RecipeFinder" />
                </a>

                <a href="https://jsumbak.github.io/ScheduleChallenge/">
                    <img className='image-fluid' src={ScheduleChallenge} alt="ScheduleChallenge" />
                </a>

                <a href="https://jsumbak.github.io/PasswordGenerator/ ">
                    <img className='image-fluid' src={PasswordGenerator} alt="PasswordGenerator" />
                </a>
                <a href="https://dry-coast-38609.herokuapp.com/">
                    <img className='image-fluid' src={Notetaker} alt="Notetaker" />
                </a>
            </ul>
        </div>
        
    )
}

export default Project;
