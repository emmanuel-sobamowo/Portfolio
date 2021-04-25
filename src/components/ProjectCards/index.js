import React, { useState, useEffect }  from 'react';
const ProjectCards = ({ repos }) => {


  return (
    <main className="Projects-container">
      <div>
        <h3>{repos.Name}</h3>
        <p className="projectDescription">{repos.description}</p>
        <button className="visit-website"><a href={repos.netlify} target="_blank">Visit The Site  <i className="project-links"></i></a></button>
        <button className="visit-repo"><a href={repos.github} target="_blank">Visit Sourcecode  <i className="project-links"></i></a></button>
      </div>

      <div>
        <img src={repos.image} className="project-img" />
      </div>

    </main >
  )
}

export default ProjectCards;