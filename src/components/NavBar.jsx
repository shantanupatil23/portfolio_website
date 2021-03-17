import React from "react";

function NavBar() {
  return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Portfolio.
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#description">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#achievements">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#socials">
                  Socials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
