import React from 'react'
import './Projects.css'
import { meusProjetos } from '../../data/projetosData'
import CardProject from '../CardProject/CardProject'

function Projects() {
  return (
    <div className='projects-container'>
        <h1 className='headline-projects'>Projetos Pessoais</h1>

        <div className="projects-page-grid">
        {/* Aqui NÃO usamos o .slice(), então ele mostra TODOS os projetos da lista */}
        {meusProjetos.map((projeto) => (
          <CardProject 
            key={projeto.id}
            title={projeto.title}
            description={projeto.description}
            image={projeto.image}
            liveLink={projeto.liveLink}
            githubLink={projeto.githubLink}
          />
        ))}
      </div>

    </div>
  )
}

export default Projects