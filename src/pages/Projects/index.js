import React, { useState } from 'react';
import repos from './data'
import {ProjectCards} from '../../components'

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
                <h1> My Projects</h1>
                <h5>Below are some of the projects I have been working on!</h5>
            </header>
            <main className="projects-container">
                {renderProjects()}
            </main>
        </>
    );
};

export default Projects;