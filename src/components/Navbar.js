import React, { useState } from 'react'

function Navbar() {
  return (
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
  )
}
