import React from "react";
import movie1 from '../assets/movie1.jpeg'
import {Link} from 'react-router-dom'

const MovieCard2 = () => {
  return (
    <div id="moviecard">
      <div className="row container">
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-6 col-md-4 picbox mb-3">
          <Link to={'/singlemovie'} className="card">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Movie Title</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard2;
