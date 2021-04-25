import React, { useState } from 'react';
import projects from './data';
import {ProjectCards} from '../../components/ProjectCards'

const Projects = () => {
    const [project, setProject] = useState(projects);


    const renderProjects = () => {
        return project.map(p =>
            <ProjectCards projects={p} key={p.id} />
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