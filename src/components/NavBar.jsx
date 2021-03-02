import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Personal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Socials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
