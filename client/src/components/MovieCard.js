import React, { useEffect, useState } from "react";
import movie2 from "../assets/movie2.jpeg";
import { Link } from "react-router-dom";
import { getAllMovies } from "../features/movieService";

const MovieCard = () => {

  const[movieData, setMovieData] = useState("")
console.log(movieData);
  useEffect(() => {
      setMovieData(getAllMovies())
    // eslint-disable-next-line
  }, [getAllMovies, setMovieData])

  return (
    <div id="moviecards">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col-lg-2 col-md-4 col-6 mb-3">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-3">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body">
              <div className="text-center p-0 ">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mb-5">
          <Link to='/singlemovie' className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link to='/singlemovie' className="text-light movietitlelink">Movie Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi.</Link>
                </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
