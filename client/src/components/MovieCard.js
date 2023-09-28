import React from "react";
import movie1 from "../assets/movie1.jpeg";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="container" id="moviecards">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col-lg-2 col-md-4 col-6">
          <Link to={'/singlemovie'} className="card w-100 shadow-0 border-0">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <h5>Movie Title</h5>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <Link to={'/singlemovie'} className="card w-100 border-0">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <h5>Movie Title</h5>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <Link to={'/singlemovie'} className="card w-100 border-0">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <h5>Movie Title</h5>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <Link to={'/singlemovie'} className="card w-100 border-0">
            <img src={movie1} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <h5>Movie Title</h5>
                </Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
