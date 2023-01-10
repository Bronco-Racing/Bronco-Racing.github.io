import React from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import AboutOurTeam from './pages/AboutOurTeam'
import TheFooter from './components/TheFooter'
import Navbar from './components/Navbar'
import './App.scss'

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <Navbar>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/sponsors" element={<Sponsors />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutourteam" element={<AboutOurTeam/>}></Route>
          </Routes>
        </main>

        <TheFooter />
      </div>
    </Router>
  )
}
