import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import movie1 from "../assets/movie1.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const MovieSlider = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/singlemovie" className="movietitle">
            <img src={movie1} alt=""  className="mb-2" />
            <span className="movietitle fs-5">Movie Title</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieSlider;
