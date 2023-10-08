import React from "react";
import movie2 from "../assets/movie2.jpeg";
import { Link } from "react-router-dom";


const MovieCard = (props) => {
  const data = props.data ? props.data : [];

  return (
    <div id="moviecards">
      <div className="row row-cols-1 row-cols-md-3">
        {data?.map((item) => {
          return (
            <div key={item._id} className="col-lg-2 col-md-4 col-6 mb-3">
          <Link to={`/singlemovie/${item._id}`} className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body">
              <div className="text-center p-0 ">
                <Link to={`/singlemovie/${item._id}`} className="text-light movietitlelink">
                {item.name}<br/>
                {item.description}
                </Link>
              </div>
            </div>
          </Link>
        </div>
          )
        })}
        <div className="col-lg-2 col-md-4 col-6 mb-3">
          <Link to="/singlemovie" className="card border-0">
            <img src={movie2} className="card-img-top zoom" alt="..." />
            <div className="card-body ">
              <div className="text-center p-0">
                <Link
                  className="text-light movietitlelink"
                >
                  Movie Title Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, modi.
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
