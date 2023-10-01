import React from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  return (
    <>
      <section>
        <div className="ms-4">
          <h3 className="text-light mb-4">
            <span className="fw-bold text-danger">| </span>Featured - Most
            Watched
          </h3>
        </div>
        <div className="ms-4 me-4">
        <MovieCard/>
        </div>
      </section>
    </>
  );
};

export default Movies;
