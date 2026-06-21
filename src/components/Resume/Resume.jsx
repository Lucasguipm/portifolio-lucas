import React from 'react'
import './Resume.css'

function Resume() {
  return (
    <div className='resume-container'>
        <h1 className='headline-resume'>Resumo</h1>
        <div className='content-container'>
            <div className='about-resume'>
                <div>
                  <h2>Trajetória</h2>
                  <hr />
                  <ul className='list-journey'>
                    <li>
                        Origem na Ciência: <span>Iniciei minha jornada acadêmica no Bacharelado em Física na UNESP, 
                        desenvolvendo uma forte base matemática, analítica e de pensamento lógico.</span>
                    </li>

                    <li>
                        Primeiro Contato com Código: <span>Descobri a paixão pela tecnologia através da disciplina de 
                        Introdução à Computação, aprendendo toda parte de Lógica de Programação utilizando C++.</span>
                    </li>

                    <li>
                        Transição: <span>Decidi migrar de área de forma autodidata e complementar. Consolidei minha 
                        base técnica através de formações intensivas focadas no ecossistema Full-Stack e Python.</span>
                    </li>

                    <li>
                        Momento Atual: <span>Focado no desenvolvimento de aplicações web completas, criando interfaces 
                        dinâmicas no Front-end e estruturando arquiteturas robustas no Back-end, buscando ingressar 
                        no mercado como Estagiário ou Desenvolvedor Júnior.</span>
                    </li>
                  </ul>
                </div>

                <div>

                  <h2>Educação</h2>
                  <hr />
                  <ul className='list-education'>
                    <li>The Complete Full-Stack Web Development Bootcamp | Udemy - Angela Yu
                      <p>HTML5, CSS3, JavaScript (ES6+), React, Node.js e Express, criação e consumo de APIs REST, autenticação de usuários, integração com bancos de dados relacionais {"("}SQL{")"}, PostgreSQL</p>
                    </li>
                      
                    <li>100 Days of Code™: The Complete Python Pro Bootcamp | Udemy - Angela Yu
                      <p>Fundamentos da linguagem, programação orientada a objetos, manipulação de dados, web scraping, aplicações web, consumo e criação de APIs. </p>
                    </li>
                    
                    <li>Bacharelado em Física | Universidade Estadual Paulista {"("}UNESP{")"} - Em andamento
                      <p>Lógica de Programação com C++</p>
                    </li>
                  </ul>
  
                </div>
            </div>
            <div className='habilities'>
              <h2>Skills</h2>
              <hr />
              <h3>Front-End</h3>
              <ul>
                <li>
                    Linguagens & Bibliotecas: <span>JavaScript (ES6+), React.js, HTML5, CSS3.</span> 
                </li>
                <li>
                    Gerenciamento de Estado & Componentização: <span>React Hooks (useState, useEffect), componentes funcionais e renderização condicional.</span> 
                </li>
                <li>
                    Estilização & Responsividade: <span>Flexbox, Grid, Bootstrap, Web Design Responsivo.</span> 
                </li>
                <li>
                    Integração: <span>Manipulação de DOM, consumo de APIs no Front-end e manipulação de JSON</span> .
                </li>
              </ul>

              <h3>Back-End</h3>
              <ul>
                <li>
                  Ambientes & Linguagens: <span>Node.js, Python.</span> 
                </li>
                <li>
                  Frameworks Web & Motores de Temas: <span>Express.js, Flask, EJS (Embedded JavaScript templates).</span> 
                </li>
                <li>
                  APIs: <span>Criação, documentação e integração de APIs RESTful.</span> 
                </li>
                <li>
                  Bancos de Dados: <span>SQL (PostgreSQL), Operações CRUD completas e modelagem de relacionamentos.</span> 
                </li>
                <li>
                  Segurança & Autenticação: <span>Criptografia de senhas (Hashing/Salting), gerenciamento de cookies/sessões e integração de OAuth 2.0 (Google/GitHub Sign-In).</span> 
                </li>
              </ul>

              <h3>Ferramentas, Utilitários & Paradigmas</h3>
              <ul>
                <li>
                  Paradigmas de Software: <span>Programação Orientada a Objetos (POO) sólida, Programação Funcional e Manipulação de Eventos.</span> 
                </li>
                <li>
                  Controle de Versão: <span>Git, GitHub (gerenciamento de repositórios, commits e branches).</span> 
                </li>
                <li>
                  Automação & Extração de Dados: <span>Web Scraping (BeautifulSoup), requisições HTTP (requests) e automação de tarefas em Python.</span> 
                </li>
                <li>
                  Ferramentas de Desenvolvimento: <span>Terminal/Linha de Comando, NPM (Node Package Manager)</span> 
                </li>
              </ul>

              <h3>Idiomas</h3>
              <ul>
                <li>Inglês: <span>C1 Advanced 69/100 (EF Set English Certificate)</span> </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Resume