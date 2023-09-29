import React from "react";
import movie2 from "../assets/movie2.jpeg";
import { Link } from "react-router-dom";

const MovieCard = () => {

  return (
    <div id="moviecards">
      <div className="row row-cols-1 row-cols-md-3 ">
        <div className="col-lg-2 col-md-4 col-4">
          <Link to={'/singlemovie'} className="card border-0">
            <img src={movie2} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link to='/singlemovie' className="text-center p-0">
                <p>Movie Title Lorem ipsum dolor sit amet,</p>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-4">
          <Link to={'/singlemovie'} className="card border-0">
            <img src={movie2} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <p>Movie Title</p>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-4">
          <Link to={'/singlemovie'} className="card border-0">
            <img src={movie2} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <p>Movie Title</p>
                </Link>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-4">
          <Link to={'/singlemovie'} className="card border-0">
            <img src={movie2} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="text-center">
                <p>Movie Title</p>
                </Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
