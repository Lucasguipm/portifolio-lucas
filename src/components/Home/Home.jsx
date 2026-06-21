import React from 'react'
import './Home.css'
import CardProject from '../CardProject/CardProject';
import { meusProjetos } from '../../data/projetosData';
import { VscFileCode } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";

function Home() {
  return (
        <div className='home-container'>
            <div className='intro'>
                <h1 className='headline'>{"< "} Olá, me chamo Lucas! {" />"}</h1>
                <div className='objetivo'>
                    <p>
                        Desenvolvedor com conhecimentos em desenvolvimento web front-end e back-end, utilizando JavaScript, React, Node.js, Python, HTML, CSS e SQL. 
                        Formação prática em Desenvolvimento Web Full Stack e Python, com experiência em criação e manutenção de aplicações web, consumo e integração de APIs REST, automação de processos e versionamento com Git/GitHub. 
                    </p>
                    <p>
                        Familiaridade com frameworks e tecnologias como React, Express.js e Flask, além de lógica de programação, desenvolvimento orientado a objetos e boas práticas de desenvolvimento de software. 
                        Experiência com manipulação de dados, desenvolvimento de funcionalidades full stack, manutenção de código e resolução de problemas técnicos.
                        Atualmente busco minha primeira oportunidade profissional, seja como Estagiário ou Júnior, para aplicar meus conhecimentos e continuar evoluindo como desenvolvedor.
                    </p>
                </div>
            </div>

            <div className='highlight-projects'>
                <h2><VscFileCode size={35} />Projetos Principais</h2>

                <div className='home-projects'> {/* container grid */}
                    {/* Pegando apenas os 2 primeiros projetos da sua lista externa */}
                    {meusProjetos.slice(0, 2).map((projeto) => (
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

            <div className='text-box'>
                <h2><VscFeedback size={40} />Sobre Mim</h2>
                <div className='about'>
                    <p>
                        Sou estudante de Bacharelado em Física pela UNESP, meu primeiro contato com programação ocorreu durante a disciplina de Introdução à Computação, na qual utilizei C++ para o aprendizado de Lógica de Programação. 
                        Essa experiência despertou meu interesse pelo desenvolvimento de software e pela resolução de problemas por meio da programação.
                    </p>
                    <p>
                        Desde então, venho me dedicando ao aprendizado da área de forma complementar à graduação. 
                        Concluí formações da Dra. Angela Yu em Desenvolvimento Web Full Stack e Python, nas quais tive contato com tecnologias como HTML, CSS, JavaScript, React, Node.js, Python e SQL. 
                        Durante esses estudos, desenvolvi projetos práticos envolvendo criação de aplicações web, integração com APIs e manipulação de dados, o que me permitiu consolidar fundamentos importantes de desenvolvimento.
                        Tenho interesse em atuar no desenvolvimento de aplicações web, tanto no front-end quanto no back-end, e busco minha primeira experiência real para aplicar os conhecimentos que adquiri.
                    </p>
                </div>
            </div>
 
        </div>
  )
}

export default Home