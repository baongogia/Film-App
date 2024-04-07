import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { ERROR_BACKGROUND, ERROR_VIDEO, IMG_URL } from "../../../JS/API";
import Loading from "./Loading";
import { Star } from "@mui/icons-material";

export default function FilmDetails() {
  const { id } = useParams();
  const filmId = parseInt(id);
  // State
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState([]);
  const [year, setYear] = useState("");
  const [redHeart, setRedHeart] = useState("white");
  const [yellowMark, setYellowMark] = useState("white");

  // Video Loading
  const getMovieList = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM4MzM4NjU4OWM5MmJlNWVhMDNiZDA0ZmI4MGRiOCIsInN1YiI6IjY1MjM3NDU2NzQ1MDdkMDBhYzRhOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9vrCoEGitOlsPTq6sfgWxJjEQsfkGN04YR8uO4FLBY",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`,
      getMovieList
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        setRating(response.vote_average.toFixed(1));
        setGenre(response.genres.map((gen) => gen.name));
        setYear(response.release_date.slice(0, 4));
      })

      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Trailer Video
  const getTrailerList = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM4MzM4NjU4OWM5MmJlNWVhMDNiZDA0ZmI4MGRiOCIsInN1YiI6IjY1MjM3NDU2NzQ1MDdkMDBhYzRhOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9vrCoEGitOlsPTq6sfgWxJjEQsfkGN04YR8uO4FLBY",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/videos?language=en-US`,
      getTrailerList
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log("video", response);
        setTrailerKey(response.results[0].key);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="">
      {movie ? (
        <Fragment>
          {/* Background */}
          <div
            style={{
              backgroundImage: movie.backdrop_path
                ? `url(${IMG_URL}${movie.backdrop_path})`
                : `url(${ERROR_BACKGROUND})`,
            }}
            className="relative bg-no-repeat bg-cover bg-center h-[100vh] text-detail 
                        after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
                         after:left-0 after:bg-opacity"
            onClick={() => setShowTrailer(false)}
          ></div>
          <article
            className="group text-white absolute rounded-[0.6em] right-0 top-[20%] 
                          left-[18%] overflow-hidden text-xl aspect-w-16 
                            aspect-h-9 shadow-3xl transition-transform duration-700 hover:scale-[1.06]
                            h-[25em] w-[66vw]
                            "
          >
            <img
              className="transition-transform duration-700 group-hover:scale-[1.06] h-full w-full object-cover object-center object-fit"
              src={
                movie.backdrop_path
                  ? `${IMG_URL}${movie.backdrop_path}`
                  : `${ERROR_BACKGROUND}`
              }
              alt="Wallpaper"
            />
            {/* Play button */}
            <div className="">
              <FontAwesomeIcon
                className="group-hover:opacity-60 absolute top-[30%] left-[45%] h-[5em] z-10
                            opacity-0 transition-opacity duration-500 cursor-pointer delay-300"
                id="PlayTrailerButton"
                onClick={() => setShowTrailer(true)}
                icon={faPlayCircle}
              />
            </div>
            {/* Content */}

            <div className="absolute bottom-[0.5em] left-[3em] right-[0em] text-left transition-transform duration-700 leading-[0.8] z-10 will-change-transform">
              {/* Title & Genres */}
              <div
                className={`w-[40em] transition-all duration-[350ms] delay-100 translate-y-[2em] 
                                             group-hover:duration-1000 group-hover:delay-200 group-hover:mb-8 ${
                                               showTrailer
                                                 ? "opacity-0"
                                                 : "opacity-100"
                                             }`}
              >
                {/* Title */}
                <h1 className="text-[1.3em] md:text-[1.5em] lg:text-[1.8em] font-bold text-inherit m-0 opacity-1 tracking-wide w-[58vw]">
                  {movie.title || movie.name}
                </h1>

                <div className="flex flex-col  items-start text-[0.8em] font-bold text-tx gap-[0.35em] mb-[-0.5em] mt-2 lg:items-end lg:flex-row">
                  <div className="flex md:flex-row items-center justify-center">
                    {/* Star icon */}
                    <div className="text-yellow-400 hidden lg:flex">
                      <Star fontSize="large" />
                      <Star fontSize="large" />
                      <Star fontSize="large" />
                      <Star fontSize="large" />
                      <Star fontSize="large" />
                    </div>
                    <div className="text-yellow-400 hidden md:flex lg:hidden">
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                      <Star fontSize="medium" />
                    </div>
                    <div className="text-yellow-400 flex md:hidden">
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                    </div>

                    {/* Time */}
                    <span className="leading-1 w-[7em] text-[1.3em] md:text-[1.5em] lg:text-[1.9em] ">
                      ·&nbsp;&nbsp;{year}
                      &nbsp;&nbsp;·&nbsp;&nbsp;11h11
                    </span>
                  </div>

                  {/* Genre */}
                  <div className="leading-1 text-[1.5em] drop-shadow-2xl mb-[0.3em] flex text-center">
                    {genre.map((gen, index) => (
                      <div
                        key={index}
                        className="ml-3 bg-slate-600 rounded-lg p-[0.3em] truncate"
                      >
                        <div className="text-[0.5em]">{gen}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Overview */}
              <p
                className="group-hover:opacity-100 group-hover:mb-6 group-hover:delay-[350ms] group-hover:duration-700 duration-[350ms]
                            text-[0.8em] leading-[1.35] delay-[90ms] transition-all overflow-hidden max-h-[5.35em] max-w-[47em] text-ellipsis 
                               opacity-0 translate-y-[1em] shadow-sm"
              >
                {movie.overview ? movie.overview : "Nothing to see"}
              </p>
              {/* Status */}
              <div className="flex gap-[0.5em]">
                <svg
                  className="group-hover:opacity-100 group-hover:mb-10 group-hover:delay-[350ms] group-hover:duration-700
                              h-[1.2em] w-auto transition-all duration-[350ms] delay-0 opacity-0 cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Heart"
                    onClick={() =>
                      redHeart === "white"
                        ? setRedHeart("red")
                        : setRedHeart("white")
                    }
                    d="M12.7439 22.3037L11.2939 20.9837C6.1439 16.3137 2.7439 13.2237 2.7439 9.45374C2.7439 6.36374 5.1639 3.95374 8.2439 3.95374C9.9839 3.95374 11.6539 4.76374 12.7439 6.03374C13.8339 4.76374 15.5039 3.95374 17.2439 3.95374C20.3239 3.95374 22.7439 6.36374 22.7439 9.45374C22.7439 13.2237 19.3439 16.3137 14.1939 20.9837L12.7439 22.3037Z"
                    fill={redHeart}
                  ></path>
                </svg>

                <svg
                  className="group-hover:opacity-100 group-hover:delay-[390ms] group-hover:duration-700
                              h-[1.2em] w-auto transition-all duration-[350ms] delay-0 opacity-0 cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Mark"
                    onClick={() =>
                      yellowMark === "white"
                        ? setYellowMark("yellow")
                        : setYellowMark("white")
                    }
                    d="M7.1439 21.3537C6.81056 21.4871 6.4939 21.4581 6.1939 21.2667C5.8939 21.0754 5.7439 20.7961 5.7439 20.4287V5.95374C5.7439 5.40374 5.9399 4.93274 6.3319 4.54074C6.7239 4.14874 7.19456 3.95307 7.7439 3.95374H17.7439C18.2939 3.95374 18.7649 4.14974 19.1569 4.54174C19.5489 4.93374 19.7446 5.4044 19.7439 5.95374V20.4287C19.7439 20.7954 19.5939 21.0747 19.2939 21.2667C18.9939 21.4587 18.6772 21.4877 18.3439 21.3537L12.7439 18.9537L7.1439 21.3537Z"
                    fill={yellowMark}
                  ></path>
                </svg>

                <svg
                  className="group-hover:opacity-100 group-hover:delay-[390ms] group-hover:duration-700
                              h-[1.2em] w-auto transition-all duration-[350ms] delay-0 opacity-0 cursor-pointer"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Nofi"
                    fill="white"
                    d="M9.7439 19.9537V17.9537H21.7439V19.9537H9.7439ZM9.7439 13.9537V11.9537H21.7439V13.9537H9.7439ZM9.7439 7.95374V5.95374H21.7439V7.95374H9.7439ZM5.7439 20.9537C5.1939 20.9537 4.7229 20.7577 4.3309 20.3657C3.9389 19.9737 3.74323 19.5031 3.7439 18.9537C3.7439 18.4037 3.9399 17.9327 4.3319 17.5407C4.7239 17.1487 5.19456 16.9531 5.7439 16.9537C6.2939 16.9537 6.7649 17.1497 7.1569 17.5417C7.5489 17.9337 7.74457 18.4044 7.7439 18.9537C7.7439 19.5037 7.5479 19.9747 7.1559 20.3667C6.7639 20.7587 6.29323 20.9544 5.7439 20.9537ZM5.7439 14.9537C5.1939 14.9537 4.7229 14.7577 4.3309 14.3657C3.9389 13.9737 3.74323 13.5031 3.7439 12.9537C3.7439 12.4037 3.9399 11.9327 4.3319 11.5407C4.7239 11.1487 5.19456 10.9531 5.7439 10.9537C6.2939 10.9537 6.7649 11.1497 7.1569 11.5417C7.5489 11.9337 7.74457 12.4044 7.7439 12.9537C7.7439 13.5037 7.5479 13.9747 7.1559 14.3667C6.7639 14.7587 6.29323 14.9544 5.7439 14.9537ZM5.7439 8.95374C5.1939 8.95374 4.7229 8.75774 4.3309 8.36574C3.9389 7.97374 3.74323 7.50307 3.7439 6.95374C3.7439 6.40374 3.9399 5.93274 4.3319 5.54074C4.7239 5.14874 5.19456 4.95307 5.7439 4.95374C6.2939 4.95374 6.7649 5.14974 7.1569 5.54174C7.5489 5.93374 7.74457 6.4044 7.7439 6.95374C7.7439 7.50374 7.5479 7.97474 7.1559 8.36674C6.7639 8.75874 6.29323 8.9544 5.7439 8.95374Z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* After */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent z-[-1]
                          to-[rgba(0,0,0,0.5)] mix-blend-overlay transition-shadow duration-700"
            ></div>
            {/* Rating */}
            <div
              className={`bg-dark p-[0.5em] rounded-lg text-center absolute
                             bottom-[0.8em] right-[1.8em] font-bold bg-opacity-60 ${
                               rating >= 8.0 ? "high" : ""
                             } ${
                rating >= 6.0 && rating < 8.0 ? "medium" : ""
              } ${rating < 6 ? "low" : ""}`}
            >
              {rating}
            </div>
            {/* Overlay */}
            <div className="absolute bg-dark bg-opacity-20 top-0 w-full h-full "></div>
          </article>
          {/* Trailer */}
          <div className="">
            <iframe
              className={`absolute top-0  z-[-1] tranform-opacity duration-1000 w-[100vw] h-[100vh]
                             overflow-hidden px-[3em] pt-[1em] pb-[1em] bg-dark 
                              rounded-[0.6em] border-double border-main border-[0.2em] opacity-0 ${
                                showTrailer
                                  ? "z-[1] opacity-100"
                                  : "z[-1] opacity-0"
                              }`}
              src={
                trailerKey
                  ? `https://www.youtube.com/embed/${trailerKey}`
                  : `${ERROR_VIDEO}`
              }
              title={`${movie.title} Video Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute top-0 w-[100vw] z-[1]">
              <FontAwesomeIcon
                className={`float-right mt-3 mr-3 text-main cursor-pointer z-[-1] opacity-0 transition-opacity duration-700 ${
                  showTrailer ? "z-[1] opacity-100" : "z-[-1] opacity-0"
                }`}
                onClick={() => setShowTrailer(false)}
                icon={faXmarkCircle}
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>Movie not found</Fragment>
      )}
    </div>
  );
}
