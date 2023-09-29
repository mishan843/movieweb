import React from "react";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="bg-blue">
      <div className="btngroup d-flex flex-wrap justify-content-center align-items-center pt-5 gap-2">
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          Bollywood
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          Hollywood
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          All Movies
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          All WebSeries
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          18+ Movies
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
          Animated
        </button>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Movies and WebSeries"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn bg-transparent border"
            type="button"
            id="button-addon2"
          >
            <BiSearch className="fs-5 text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
