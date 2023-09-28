import React from "react";
import MovieSlider from "../components/MovieSlider";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  return (
    <>
      <div className="bg-blue d-flex flex-column text-center pt-3 container">
        <p className="text-light moviecontent1">
          <span className="text-danger">FunZilla</span> – The Best Place to
          Watch or Download Free Movies and WebSeries Online
        </p>

        <p className="text-light moviecontent">
          Movie and WebSeries fans now have a place, where they can find all
          their favorite Flicks. Would you like to get an exclusive access to
          all the major blockbusters of the recent years? Everybody wants to see
          a great movie with his friends and family every once in a while and{" "}
          <span className="text-danger">FunZilla</span> is the exact place for
          that! Start by Searching or by Navigating the
          <span className="text-danger">FunZilla</span> Top Menu, You will find
          somthing to watch in a matter of seconds!
          ..."
        </p>
      </div>
      <section>
        <div className="ms-4">
          <h3 className="text-light mb-4">
            <span className="fw-bold text-danger">| </span>Featured - Most
            Watched
          </h3>
        </div>
        <div className="container">
        <MovieSlider/>
        </div>
      </section>
      <section>
        <div className="ms-4">
          <h3 className="text-light mb-4">
            <span className="fw-bold text-danger">| </span>Featured - Most
            Watched
          </h3>
        </div>
        <div className="container ms-4 me-4">
        <MovieCard/>
        </div>
      </section>
      <section>
        <div className="ms-4 pt-4">
          <h3 className="text-light mb-4">
            <span className="fw-bold text-danger">| </span>Featured - Most
            Watched
          </h3>
        </div>
        <div className="container ms-4 me-4">
        <MovieCard/>
        </div>
      </section>
    </>
  );
};

export default Movies;
