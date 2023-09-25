import React from "react";
import {Link} from 'react-router-dom';
import {RiArrowRightSFill} from 'react-icons/ri'
import {BsFillCameraReelsFill} from 'react-icons/bs'

const GenersDropdown = () => {
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
        > <BsFillCameraReelsFill className="mx-2"/> 
          Genres
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

export default GenersDropdown;
