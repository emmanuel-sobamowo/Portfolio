import React from 'react';
import { Skills } from '../../components';
import './app.css';

const About = () => {
    return (
        <>
        <div class="card" id="about-section">
            <div class="container">
                <h1 id="About"> About Me... </h1>
                <h4 id="Sub-About"> Welcome to my portfolio</h4>
                <p>I am a graduate from the University of Liverpool, with a BA in Business Studies and Politics.
                Following my graduation in 2019, I started work at GetAgent.co.uk as a Customer Service Manager. 
                I recently made the decision to puruse a career in the technology industry, following months of online HTML and Javascript courses on Udemy. 
                I was fortunate enough to begin my journey with Futureproof and attend the coding bootcamp, training as a full stack developer.
                I have been able to grow as a full-stack developer, and specialise in React and Javascript. 
                This is my portfolio with some of the projects I have started, and been a part of. 
                This is just the start of my software development journey, and I am eager to log all my progress and ideas!</p>
            </div>
        </div>
        <div class="card" id="skills-section">
            <div class="container1">
                <Skills />
            </div>        
        </div>
        </>
    )
}
export default About;