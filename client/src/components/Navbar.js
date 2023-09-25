import React from "react";
import { Link } from "react-router-dom";
import GenersDropdown from "./GenersDropdown";
import TypesDropdown from "./TypesDropdown";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue  ">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-2" to="/">
            FunZilla
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/webseries">
                  WebSeries
                </Link>
              </li>
              <GenersDropdown/>
              <TypesDropdown/>
              <li className="nav-item">
                <Link className="nav-link" to="/top50">
                  Top 50
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
