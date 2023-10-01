import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <div className="d-flex justify-content-center align-items-center">
            <span className="navbar-toggler-icon px-3"></span>
            <p className="mb-0 mx-3">DMCA Policy</p>
            </div>

          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/dmcapolicy">
                  DMCA Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/howtodownload">
                  How To Download
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacypolicy">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sitemaps">
                  SiteMaps
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/termsofuse">
                  Terms of Use
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-dark">
        <p className="text-light border-top text-center py-3">FunZilla - Copyright 2023. We Not Published any Movies from us, we shared only movies which are available at Google by other uploader</p>
      </div>
    </div>
  );
};

export default Footer;
