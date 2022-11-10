import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import TheFooter from './components/TheFooter'
import './App.scss'

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <nav className="navbar">
            <ul className="navbar-brand">
              <li className="navbar-item">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about">About</Link>
              </li>
              <li className="navbar-item">
                <Link to="/sponsors">Sponsors</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/sponsors" element={<Sponsors />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>

        <TheFooter />
      </div>
    </Router>
  )
}
