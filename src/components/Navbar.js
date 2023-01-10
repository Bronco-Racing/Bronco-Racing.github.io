import React from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="navbar-brand">
        <li className={`navbar-item ${location.pathname === '/' ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/about' ? "active" : ""}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/sponsors' ? "active" : ""}`}>
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/aboutourteam' ? "active" : ""}`}>
          <Link to="/aboutourteam">Meet Our Team</Link>
        </li>
      </ul>
    </nav>
  )
}
