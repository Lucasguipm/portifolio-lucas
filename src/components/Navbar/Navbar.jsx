import React from 'react'
import './Navbar.css'

function Navbar({ activeTab, setActiveTab }) {
    // Lista com as suas 3 abas oficiais
    const tabs = ['Home', 'Projects', 'Resume'];

    return (
        <nav className="navbar-container">
            <ul className="nav-links">
                {tabs.map((tab) => (
                    <li key={tab}>
                        <button
                            className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar