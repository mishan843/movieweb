import React from "react";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="bg-blue">
      <div className="btngroup d-flex flex-wrap justify-content-center align-items-center pt-5 gap-2">
        <button className="btn bg-danger text-dark rounded-pill pt-2 px-3">
          Bollywood
        </button>
        <button className="btn bg-success text-dark rounded-pill pt-2 px-3">
          Hollywood
        </button>
        <button className="btn bg-warning text-dark rounded-pill pt-2 px-3">
          All Movies
        </button>
        <button className="btn bg-primary text-dark rounded-pill pt-2 px-3">
          All WebSeries
        </button>
        <button className="btn bg-secondary text-dark rounded-pill pt-2 px-3">
         18+ Movies
        </button>
        <button className="btn bg-info text-dark rounded-pill pt-2 px-3">
         Animated
        </button>
        <div className="search mt-3 shadow-lg img-fluid">
            <BiSearch className="fa fa-search"/>
          <input placeholder="Search Movies/Webseries..." />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
