import React, { useState } from 'react';
import repos from './data'
import {ProjectCards} from '../../components'
import './app.css';

const Projects = () => {
    const [project, setProject] = useState(repos);


    const renderProjects = () => {
        return project.map(p =>
            <ProjectCards repos={p} key={p.id} />
        );
    }

    return (
        <>
            <header className="intro-container">
                <h1 id="project-intro"> My Projects</h1>
                <h2 id="project-subintro">Below are some of the projects I have been working on!</h2>
            </header>
            <main>
                {renderProjects()}
            </main>
        </>
    );
};

export default Projects;