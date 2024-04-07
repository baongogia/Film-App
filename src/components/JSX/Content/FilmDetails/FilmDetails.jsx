import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { ERROR_BACKGROUND, ERROR_VIDEO, IMG_URL } from "../../../JS/API";
import Loading from "./Loading";

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
            className="relative bg-no-repeat bg-cover bg-center h-847 text-detail 
                        after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
                         after:left-0 after:bg-opacity"
            onClick={() => setShowTrailer(false)}
          ></div>
          {/* Card */}
          <article
            className="group text-white absolute rounded-[0.6em] right-0 top-[20%] 
                          left-[20%] overflow-hidden text-xl h-[25em] w-[105vh] aspect-w-16 
                            aspect-h-9 shadow-3xl transition-transform duration-700 hover:scale-[1.06]"
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
                <h1 className="text-[1.8em] font-bold text-inherit m-0 opacity-1 drop-shadow-2xl">
                  {movie.title || movie.name}
                </h1>

                <div className="text-[0.8em] font-bold text-tx gap-[0.35em] flex items-end mb-[-0.5em] mt-1 drop-shadow-2xl">
                  <svg
                    className="h-[2.2em] w-auto transition-all duration-[350ms] delay-0"
                    width="141"
                    height="29"
                    viewBox="0 0 141 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7373 22.2778L9.89788 25.193C9.6841 25.3291 9.46059 25.3874 9.22737 25.368C8.99415 25.3485 8.79008 25.2708 8.61516 25.1347C8.44024 24.9987 8.3042 24.8284 8.20702 24.624C8.10984 24.4195 8.09041 24.1913 8.14871 23.9395L9.43144 18.4296L5.14597 14.7272C4.95162 14.5523 4.83034 14.3528 4.78214 14.129C4.73395 13.9051 4.74833 13.6866 4.82529 13.4736C4.90303 13.2598 5.01964 13.0849 5.17512 12.9488C5.33061 12.8128 5.54439 12.7253 5.81649 12.6865L11.4721 12.1909L13.6586 7.00167C13.7558 6.76845 13.9066 6.59353 14.1111 6.47692C14.3155 6.36031 14.5242 6.302 14.7373 6.302C14.951 6.302 15.1598 6.36031 15.3635 6.47692C15.5671 6.59353 15.718 6.76845 15.8159 7.00167L18.0024 12.1909L23.658 12.6865C23.9301 12.7253 24.1439 12.8128 24.2994 12.9488C24.4549 13.0849 24.5715 13.2598 24.6492 13.4736C24.727 13.6874 24.7417 13.9062 24.6935 14.1301C24.6453 14.354 24.5237 14.553 24.3285 14.7272L20.0431 18.4296L21.3258 23.9395C21.3841 24.1921 21.3647 24.4207 21.2675 24.6251C21.1703 24.8296 21.0343 24.9995 20.8593 25.1347C20.6844 25.2708 20.4804 25.3485 20.2471 25.368C20.0139 25.3874 19.7904 25.3291 19.5766 25.193L14.7373 22.2778Z"
                      fill="#58AAE8"
                    ></path>
                    <path
                      d="M42.724 22.2778L37.8846 25.193C37.6708 25.3291 37.4473 25.3874 37.2141 25.368C36.9809 25.3485 36.7768 25.2708 36.6019 25.1347C36.427 24.9987 36.2909 24.8284 36.1937 24.624C36.0966 24.4195 36.0771 24.1913 36.1354 23.9395L37.4181 18.4296L33.1327 14.7272C32.9383 14.5523 32.8171 14.3528 32.7689 14.129C32.7207 13.9051 32.735 13.6866 32.812 13.4736C32.8897 13.2598 33.0064 13.0849 33.1618 12.9488C33.3173 12.8128 33.5311 12.7253 33.8032 12.6865L39.4588 12.1909L41.6453 7.00167C41.7425 6.76845 41.8933 6.59353 42.0978 6.47692C42.3022 6.36031 42.511 6.302 42.724 6.302C42.9377 6.302 43.1465 6.36031 43.3502 6.47692C43.5538 6.59353 43.7047 6.76845 43.8026 7.00167L45.9891 12.1909L51.6447 12.6865C51.9168 12.7253 52.1306 12.8128 52.2861 12.9488C52.4416 13.0849 52.5582 13.2598 52.6359 13.4736C52.7137 13.6874 52.7284 13.9062 52.6802 14.1301C52.632 14.354 52.5104 14.553 52.3152 14.7272L48.0298 18.4296L49.3125 23.9395C49.3708 24.1921 49.3514 24.4207 49.2542 24.6251C49.157 24.8296 49.021 24.9995 48.8461 25.1347C48.6711 25.2708 48.4671 25.3485 48.2338 25.368C48.0006 25.3874 47.7771 25.3291 47.5633 25.193L42.724 22.2778Z"
                      fill="#58AAE8"
                    ></path>
                    <path
                      d="M70.7107 22.2778L65.8713 25.193C65.6575 25.3291 65.434 25.3874 65.2008 25.3679C64.9676 25.3485 64.7635 25.2708 64.5886 25.1347C64.4137 24.9987 64.2776 24.8284 64.1805 24.624C64.0833 24.4195 64.0638 24.1913 64.1221 23.9395L65.4049 18.4296L61.1194 14.7272C60.9251 14.5523 60.8038 14.3528 60.7556 14.129C60.7074 13.9051 60.7218 13.6866 60.7987 13.4736C60.8765 13.2598 60.9931 13.0849 61.1486 12.9488C61.304 12.8128 61.5178 12.7253 61.7899 12.6865L67.4456 12.1909L69.632 7.00167C69.7292 6.76845 69.88 6.59353 70.0845 6.47692C70.2889 6.36031 70.4977 6.302 70.7107 6.302C70.9245 6.302 71.1332 6.36031 71.3369 6.47692C71.5406 6.59353 71.6914 6.76845 71.7893 7.00167L73.9758 12.1909L79.6315 12.6865C79.9035 12.7253 80.1173 12.8128 80.2728 12.9488C80.4283 13.0849 80.5449 13.2598 80.6226 13.4736C80.7004 13.6874 80.7152 13.9062 80.667 14.1301C80.6188 14.354 80.4971 14.553 80.302 14.7272L76.0165 18.4296L77.2992 23.9395C77.3575 24.1921 77.3381 24.4207 77.2409 24.6251C77.1437 24.8296 77.0077 24.9995 76.8328 25.1347C76.6579 25.2708 76.4538 25.3485 76.2206 25.3679C75.9873 25.3874 75.7638 25.3291 75.5501 25.193L70.7107 22.2778Z"
                      fill="#58AAE8"
                    ></path>
                    <path
                      d="M98.6974 22.2778L93.858 25.193C93.6442 25.3291 93.4207 25.3874 93.1875 25.368C92.9543 25.3485 92.7502 25.2708 92.5753 25.1347C92.4004 24.9987 92.2643 24.8284 92.1671 24.624C92.07 24.4195 92.0505 24.1913 92.1088 23.9395L93.3916 18.4296L89.1061 14.7272C88.9117 14.5523 88.7905 14.3528 88.7423 14.129C88.6941 13.9051 88.7084 13.6866 88.7854 13.4736C88.8631 13.2598 88.9798 13.0849 89.1352 12.9488C89.2907 12.8128 89.5045 12.7253 89.7766 12.6865L95.4322 12.1909L97.6187 7.00167C97.7159 6.76845 97.8667 6.59353 98.0712 6.47692C98.2756 6.36031 98.4844 6.302 98.6974 6.302C98.9112 6.302 99.1199 6.36031 99.3236 6.47692C99.5273 6.59353 99.6781 6.76845 99.776 7.00167L101.962 12.1909L107.618 12.6865C107.89 12.7253 108.104 12.8128 108.259 12.9488C108.415 13.0849 108.532 13.2598 108.609 13.4736C108.687 13.6874 108.702 13.9062 108.654 14.1301C108.605 14.354 108.484 14.553 108.289 14.7272L104.003 18.4296L105.286 23.9395C105.344 24.1921 105.325 24.4207 105.228 24.6251C105.13 24.8296 104.994 24.9995 104.819 25.1347C104.645 25.2708 104.44 25.3485 104.207 25.368C103.974 25.3874 103.751 25.3291 103.537 25.193L98.6974 22.2778Z"
                      fill="#58AAE8"
                    ></path>
                    <path
                      d="M126.684 10.4417V19.5374L130.357 21.7822L129.395 17.5841L132.631 14.7855L128.375 14.4065L126.684 10.4417ZM126.684 22.2778L121.845 25.193C121.631 25.3291 121.407 25.3874 121.174 25.368C120.941 25.3485 120.737 25.2708 120.562 25.1347C120.387 24.9987 120.251 24.8284 120.154 24.624C120.057 24.4195 120.037 24.1913 120.096 23.9395L121.378 18.4296L117.093 14.7272C116.898 14.5523 116.777 14.3528 116.729 14.129C116.681 13.9051 116.695 13.6866 116.772 13.4736C116.85 13.2598 116.967 13.0849 117.122 12.9488C117.277 12.8128 117.491 12.7253 117.763 12.6865L123.419 12.1909L125.605 7.00167C125.703 6.76845 125.853 6.59353 126.058 6.47692C126.262 6.36031 126.471 6.302 126.684 6.302C126.898 6.302 127.107 6.36031 127.31 6.47692C127.514 6.59353 127.665 6.76845 127.763 7.00167L129.949 12.1909L135.605 12.6865C135.877 12.7253 136.091 12.8128 136.246 12.9488C136.402 13.0849 136.518 13.2598 136.596 13.4736C136.674 13.6874 136.689 13.9062 136.64 14.1301C136.592 14.354 136.471 14.553 136.275 14.7272L131.99 18.4296L133.273 23.9395C133.331 24.1921 133.312 24.4207 133.214 24.6251C133.117 24.8296 132.981 24.9995 132.806 25.1347C132.631 25.2708 132.427 25.3485 132.194 25.368C131.961 25.3874 131.737 25.3291 131.523 25.193L126.684 22.2778Z"
                      fill="#58AAE8"
                    ></path>
                  </svg>

                  <span className="leading-1 text-[1.5em] drop-shadow-2xl mb-[0.2em] w-[7em] ">
                    ·&nbsp;&nbsp;{year}
                    &nbsp;&nbsp;·&nbsp;&nbsp;11h11
                  </span>
                  {/* Genre */}
                  <div className="leading-1 text-[1.5em] drop-shadow-2xl mb-[0.1em] flex text-center">
                    {genre.map((gen, index) => (
                      <div
                        key={index}
                        className="ml-3 bg-slate-600 rounded-lg p-[0.3em] truncate"
                      >
                        <div className="text-[0.5em] ">{gen}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Overview */}
              <p
                className="group-hover:opacity-100 group-hover:mb-6 group-hover:delay-[350ms] group-hover:duration-700 duration-[350ms]
                            text-[0.8em] leading-[1.35] delay-[90ms] transition-all overflow-hidden max-h-[5.35em] max-w-[47em] text-ellipsis 
                               opacity-0 translate-y-[1em] drop-shadow-2xl"
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
              className={`absolute right-0 top-[18%] z-[-1] tranform-opacity duration-1000
                            left-[18%] overflow-hidden px-[3em] pt-[1em] pb-[1em] bg-dark 
                              rounded-[0.6em] border-double border-main border-[0.2em] opacity-0 ${
                                showTrailer
                                  ? "z-[1] opacity-100"
                                  : "z[-1] opacity-0"
                              }`}
              width="950"
              height="550"
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
            <FontAwesomeIcon
              className={`absolute top-[20%] left-[82%] text-main cursor-pointer z-[-1] opacity-0 transition-opacity duration-700 ${
                showTrailer ? "z-[1] opacity-100" : "z-[-1] opacity-0"
              }`}
              onClick={() => setShowTrailer(false)}
              icon={faXmarkCircle}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>Movie not found</Fragment>
      )}
    </div>
  );
}
