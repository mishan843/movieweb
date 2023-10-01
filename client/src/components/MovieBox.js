import React from "react";
import movie1 from "../assets/movie1.jpeg";
import {AiFillStar} from 'react-icons/ai'
const MovieBox = () => {
  return (
    <div>
      <section id="moviebox" className="pb-5">
        <div className="card w-75 mb-3">
          <div className="row">
            <div className="col-md-4 px-4 py-4">
              <img
                src={movie1}
                className="w-75 rounded-start zoom"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2 text-light mt-5">
                  Breaking Bad (2008–2013) 49 min|Crime, Drama, Thriller|20 Jan
                  2008
                </h5>
                <p className="card-text text-light border-bottom pb-2">
                <AiFillStar className="position-relative text-warning fs-1 m-3" />
                
                  Rating: 9.5 / 10 from 2,027,006 users A chemistry teacher
                  diagnosed with inoperable lung cancer turns to manufacturing
                  and selling methamphetamine with a former student in order to
                  secure his family's future.
                </p>
                <p className="card-text text-light">
                  Creator: Vince Gilligan Actors: Bryan Cranston, Aaron Paul,
                  Anna Gunn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieBox;
