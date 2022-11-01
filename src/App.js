import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Sponsors from './Sponsors';

export default function App() {
  return (
    <Router>
      <div>
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
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/sponsors" element={<Sponsors />}>
          </Route>
          <Route path="/" element = {<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}