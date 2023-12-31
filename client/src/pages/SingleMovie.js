import React, { useEffect } from "react";
import MovieBox from "../components/MovieBox";
import moviess from "../assets/moviess.jpeg";
import { BsFire } from "react-icons/bs";
import { AiFillThunderbolt, AiTwotonePushpin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovie } from "../features/movieSlice";

const SingleMovie = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getMovie(movieId));
    // eslint-disable-next-line
  }, []);

  const movieState = useSelector((state) => state?.movie?.singleMovie?.data);
  console.log(movieState?.screenshots[0]);

  return (
    <div>
      <section id="singlemovie" className="me-0">
        <div className="mt-5 text-light">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="mb-0 pt-4 pb-3 p-3">
              Download {movieState?.name} {movieState?.description}(Season 1-2)
              [S02E08 Added] Dual Audio Hindi-English BluRay 480p [200MB] ||
              720p [320MB] || 1080p [1GB]
            </h3>
            <p className="p-3">
              Download Breaking Bad (Season 1-2) 2008 All Episodes
              (Hindi-English) and is available in 480p, 720p each episode 200MB
              & 500MB. This Series was Published By the AMC Network. There is a
              total of 5 Season Released Yet and it has a total of 62 episodes.
              This series is based on Drama, Crime, and Thriller. The whole
              season is dubbed By Zee Original in HINDI. BluRay print with ORG
              2.0 Hindi + 5.1 English Audio with English Subtitles.Season and
              Episode Wise Link Below. Click on the links below to proceed
            </p>
            <p className="p-3 pt-3">
              <span className="text-danger">FunZilla</span> is The Best
              Website/Platform For Hollywood HD Movies. We Provide Direct Google
              Drive Download Links For Fast And Secure Downloading. Just Click
              On Download Button And Follow Steps To Download And Watch Movies
              Online For Free
            </p>
            <h3 className="text-center p-5">
              Download Download Breaking Bad S01-S02 Hindi Dubbed 480p, 720p &
              1080p - <span className="text-danger">FunZilla</span>
            </h3>
            <MovieBox singleData={movieState ? movieState : []} />

            <div>
              <span className="text-danger fs-4 px-4 my-1">Series Info:</span>

              <ul className="px-5">
                <li>
                  Full Name: Breaking Bad Season: 1 & 2 Episodes: 07 & 08{" "}
                </li>
                <li>Language: Dual Audio (Hindi-English)</li>
                <li>Subtitles: Yes (English)</li>
                <li>
                  Release Year: 2008 Size: 200MB & 350MB & 480MB & 950MB & 1.2GB
                  (Each Episode)
                </li>
                <li>
                  secondary Quality: 480p, 720p 10Bit x265/ x264 & 1080p 10Bit
                  x265/ x264 – BluRay
                </li>
                <li>Format: Mkv</li>
              </ul>
              <p className="px-4">
                <span className="text-danger">Storyline: </span>
                <br />
                Walter White, a New Mexico chemistry teacher, is diagnosed with
                Stage III cancer and given a prognosis of only two years left to
                live. He becom className="container"es filled with a sense of
                fearlessness and an unrelenting desire to secure his family’s
                financial future at any cost as he enters the dangerous world of
                drugs and crime. White is diagnosed with Stage III cancer and
                given a prognosis of two years left to live. With a new sense of
                fearlessness based on his medical prognosis, and a desire to
                secure his family’s financial security, White chooses to enter a
                dangerous world of drugs and crime and ascends to power in the
                world.
              </p>
            </div>
            <div>
              <span className="text-danger fs-5 px-3">ScreenShots:</span>
              <div className="">
                {movieState?.screenshots?.map((image, index) => {
                  return (
                    <img
                      src={movieState?.screenshots}
                      alt="screenshots"
                      className="w-75 px-4 p-2"
                    />
                  );
                })}
                <img src={moviess} alt="" className="w-75 px-4 p-2" />
              </div>
            </div>
            <h3 className="mb-5 pt-4 pb-3 p-3 border-bottom">
              Download Breaking Bad (Season 1-2) [S02E08 Added] Dual Audio
              Hindi-English BluRay 480p [200MB] || 720p [320MB] || 1080p [1GB]
            </h3>
            <h4 className="text-center text-danger">
              Season 1 Hindi-English 480p x264 Esubs [200MB]
            </h4>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button className="btn bg-dark rounded-3 px-5 py-2 mb-2 text-light d-flex align-items-center">
                <BsFire className="text-warning me-2" />
                G-Direct
              </button>
              <button className="btn bg-secondary rounded-3 px-5 py-2 mb-2 text-dark d-flex align-items-center">
                <AiTwotonePushpin className="text-danger me-2" />
                G-Direct
              </button>
              <button className="btn bg-warning rounded-3 px-5 py-2 text-light d-flex align-items-center">
                <AiFillThunderbolt className="text-primary me-2" />
                G-Direct
              </button>
            </div>
            <h4 className="text-center text-success pt-4">
              Season 1 Hindi-English 480p x264 Esubs [200MB]
            </h4>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button className="btn bg-dark rounded-3 px-5 py-2 mb-2 text-light d-flex align-items-center">
                <BsFire className="text-warning me-2" />
                G-Direct
              </button>
              <button className="btn bg-secondary rounded-3 px-5 py-2 mb-2 text-dark d-flex align-items-center">
                <AiTwotonePushpin className="text-danger me-2" />
                G-Direct
              </button>
              <button className="btn bg-warning rounded-3 px-5 py-2 text-light d-flex align-items-center">
                <AiFillThunderbolt className="text-primary me-2" />
                G-Direct
              </button>
            </div>
            <h4 className="text-center text-primary pt-4">
              Season 1 Hindi-English 480p x264 Esubs [200MB]
            </h4>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button className="btn bg-dark rounded-3 px-5 py-2 mb-2 text-light d-flex align-items-center">
                <BsFire className="text-warning me-2" />
                G-Direct
              </button>
              <button className="btn bg-secondary rounded-3 px-5 py-2 mb-2 text-dark d-flex align-items-center">
                <AiTwotonePushpin className="text-danger me-2" />
                G-Direct
              </button>
              <button className="btn bg-warning rounded-3 px-5 py-2 text-light d-flex align-items-center">
                <AiFillThunderbolt className="text-primary me-2" />
                G-Direct
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleMovie;
