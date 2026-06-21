import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

// Componentes temporários (ou páginas reais) para testar o clique
//const Resume = () => <div><h2>Minha Trajetória & Experiência</h2></div>;

function App() {
  //const [count, setCount] = useState(0)
  
  // Estado que guarda qual aba está aberta. Começa na 'Home'
  const [activeTab, setActiveTab] = useState('Home');

  // Função auxiliar para renderizar o componente correto baseado no estado
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    
    <div className='container'>

      <aside className='sidebar'>
        <Sidebar />
      </aside>

      <main className='main-box'>
        <nav className='navbar'>
          {/* Passando o estado e a função para a Navbar */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>

        <section className='content-box'>
          {/* Aqui o React renderiza dinamicamente a página escolhida */}
          {renderContent()}
        </section>
      </main>

    </div>
    
  )
}

export default App
