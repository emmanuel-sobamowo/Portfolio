import React from 'react';

const ProjectCards = ({ projects }) => {


  return (
    <main className="Projects-container">
      <div>
        <h3>{projects.name}</h3>
        <p className="projectDescription">{projects.description}</p>
        <button className="visit-website"><a href={projects.netlify} target="_blank">Visit The Site  <i className="project-links"></i></a></button>
        <button className="visit-repo"><a href={projects.github} target="_blank">Visit Sourcecode  <i className="project-links"></i></a></button>
      </div>

      <div>
        <img src={projects.image} alt={projects.alt} className="project-img" />
      </div>

    </main >
  )
}

export default ProjectCards;