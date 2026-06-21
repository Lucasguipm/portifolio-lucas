import React from 'react'
import './Sidebar.css'
import fotoPerfil from '../../assets/lucas_foto.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { SiGmail } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { VscTerminal } from "react-icons/vsc";
import { VscGitStash } from "react-icons/vsc";
import { VscArrowCircleDown } from "react-icons/vsc";

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='name'>
            <div className='name-icon'><VscTerminal size={70}/></div>
            <h1>
                Lucas <br />
                Guilherme
            </h1>
        </div>

        <div className='profile-img'>
            <img src={fotoPerfil} className="profile-photo" />
        </div>

        <div className='icons'>
            {/* Link para o LinkedIn */}
            <a 
                href="https://www.linkedin.com/in/lucasguilhermepereira/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='icon-button' 
                title='Visitar LinkedIn'
            >
                <FaLinkedinIn size={30} />
            </a>
  
            {/* Link para o GitHub */}
            <a 
                href="https://github.com/Lucasguipm" 
                target="_blank" 
                rel="noopener noreferrer"
                className='icon-button' 
                title='Visitar GitHub'
            >
                <FaGithub size={30} />
            </a>

            {/* Link para o Gmail */}
            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lucasguilhermepereiramoura@gmail.com&su=Contato+atrav%C3%A9s+do+Portf%C3%B3lio"
                target="_blank"
                rel="noopener noreferrer"
                className='icon-button' 
                title='Enviar E-mail pelo Gmail Web'
            >
                <SiGmail size={30} />
            </a>

        </div>

        <div className='description'>
            <h1>Desenvolvedor <br /> Full Stack</h1>
            
            <div className='skill-box'>
                <p>Python</p> 
                <p>JavaScript ES6+</p>
            </div>
           
            <div className='skill-box'>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Flexbox</p>
                <p>Grid</p>
                <p>React</p>
                <p>Bootstrap</p>
            </div>
            
            
            <div className='skill-box'>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>Flask</p>
                <p>APIs REST</p>
            </div>
            
            <div className='skill-box'>
                <p>SQL</p>
                <p>PostgreSQL</p>
            </div>
            
            <div className='skill-box'>
                <p>Git/GitHub</p>
            </div>
        </div>

        <div className='cv-button-container'>
            <a 
                href="/Lucas_Guilherme_CV.pdf" 
                download="Lucas_Guilherme_CV.pdf"
                className='download-cv-btn'
            >
                Download CV <VscArrowCircleDown size={30} />
            </a>
        </div>
    </div>
  )
}

export default Sidebar