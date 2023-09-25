import React from "react";
import { Link } from "react-router-dom";
import {RiArrowRightSFill} from 'react-icons/ri';
import {PiFilmSlateBold} from 'react-icons/pi'

const TypesDropdown = () => {
  return (
    <div>
      <li className="nav-item dropdown">
        
        <Link
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        > <PiFilmSlateBold className="mx-2"/>
          Types
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="dropdown-item d-flex align-items-center" href="#">
              <RiArrowRightSFill /> Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              <RiArrowRightSFill /> Animation
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              <RiArrowRightSFill /> Horror
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              <RiArrowRightSFill /> Comady
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default TypesDropdown;
