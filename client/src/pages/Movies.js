import React, {useEffect} from "react";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../features/movieSlice";

const Movies = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
    // eslint-disable-next-line
  }, [])

  const movieState = useSelector((state) => state.movie.movies.data);

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
          <MovieCard data={movieState ? movieState : []} />
        </div>
        
      </section>
    </>
  );
};

export default Movies;
