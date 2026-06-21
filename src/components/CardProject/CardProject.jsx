import React from 'react';
import './CardProject.css';

// O componente recebe os dados dinâmicos aqui
function CardProject({ title, description, image, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt={`Preview do projeto ${title}`} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="card-buttons">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">
            Deploy
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;