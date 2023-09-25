import React from "react";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="bg-blue container">
      <div className="btngroup d-flex flex-wrap justify-content-center align-items-center pt-5 gap-2">
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          FAQ!
        </button>
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          Latest
        </button>
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          KDrama
        </button>
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          KIDS
        </button>
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          All Movies
        </button>
        <button className="btn bg-light text-dark rounded-pill pt-2 px-3">
          All WebSeries
        </button>
        <div className="search mt-3 shadow-lg">
            <BiSearch className="fa fa-search"/>
          <input placeholder="Search Movies/Webseries..." />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
