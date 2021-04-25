import React from 'react';
import './app.css';
const Skills = () => {
    return (
        <>
        <div class="skills-card" id="skills-section">
            <div class="skills-container">
                <h1>Skills</h1>
                <h4>Below are a some of the skills I have developed from my work experience and my Futureproof Coding Bootcamp.</h4>

                    <table id="skills">
                    <tr>
                        <th>Technical</th>
                        <th>Team-Based</th>
                    </tr>
                    <tr>
                        <td>HTML & CSS</td>
                        <td>Effective Teamwork</td>
                    </tr>
                    <tr>
                        <td>JavaScript & Node.js</td>
                        <td>Clear Communication</td>
                    </tr>
                    <tr>
                        <td>PostgreSQL & MongoDB</td>
                        <td>Presenting</td>
                    </tr>
                    <tr>
                        <td>PYTHON</td>
                        <td>Active Listener</td>
                    </tr>
                    <tr>
                        <td>RESTful API's</td>
                        <td>Eager Learner</td>
                    </tr>
                    <tr>
                        <td>Responsive Web-Design</td>
                        <td>Organised and Perseverant</td>
                    </tr>
                    </table>
            </div>
        </div>
        </>

    )
}

export default Skills;