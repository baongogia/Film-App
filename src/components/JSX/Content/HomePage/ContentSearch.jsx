import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../JS/API";
import SearchMiniList from "./SearchMiniList";

export default function ContentSearch() {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [trendList, setTrendList] = useState([]);
  // Rating point
  useEffect(() => {
    const points = document.querySelectorAll(".Rate");

    points.forEach((point) => {
      const rating = parseFloat(point.innerHTML);

      if (rating >= 8.0) {
        point.classList.add("high");
      } else if (rating >= 6.0 && rating < 8.0) {
        point.classList.add("medium");
      } else {
        point.classList.add("low");
      }
    });
  }, []);

  useEffect(() => {
    fetch(BASE_URL + "/3/discover/movie?api_key=" + API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setTrendList(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchString}`
    );
    console.log(response.data.results);
    updateMovieList(response.data.results);
  };

  const onTextChange = (e) => {
    const value = e.target.value;
    clearTimeout(timeoutId);
    updateSearchQuery(value);
    const timeout = setTimeout(() => fetchData(value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div id="search" className="content__search h-[35em] bg-white  dark:bg-dark">
      <img
        className="content__search--img"
        src="https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg"
        alt="#"
      ></img>
      <div className="content__search--overlay"></div>

      <div className="absolute top-10 left-[15.5%] z-10 w-[60vw]">
        <div className="text-white text-center font-bold  whitespace-nowrap">
          <p className="text-[5vw] font-bold">Can't Find Anything You Like?</p>
          <p className="ml-[1em] md:ml-[3em] text-[2vw] font-thin">
            Search for thousands of unique movies from our growing database...
          </p>
        </div>

        <div className="relative flex justify-center items-center mt-[4%] h-0">
          {/* Search bar */}
          <input
            className="h-[2.15em] mt-16 ml-10 w-[100vw] md:ml-10 md:mt-10 lg:w-[35.6vw] text-[1.5em] 
            indent-5 rounded-3xl outline-none focus:border-main focus:border-double focus:border-[0.2em] dark:bg-dark dark:text-white"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onFocus={() => setOpenSearchBox(true)}
            onBlur={() => setTimeout(() => setOpenSearchBox(false), 200)}
            onChange={onTextChange}
            name="earch"
          ></input>
          {/* Search icon */}
          <FontAwesomeIcon
            className="absolute text-[2.3em] right-5 top-4 md:right-4 lg:right-[20%] md:top-1 text-black dark:text-main"
            icon={faSearch}
          />

          {/* Search box */}
          <div
            className={`absolute top-[4em] right-0 md:top-[3.2em] md:right-0 lg:right-[10.4em] rounded-[0.8em] overflow-auto border-solid border-[0.1em]
                         border-main opacity-0 transition-opacity duration-300 pointer-events-none ${
                           openSearchBox
                             ? "opacity-100 pointer-events-auto"
                             : "opacity-0 pointer-events-none"
                         }`}
          >
            <div className=" w-[52vw] h-[20.5em] md:w-[54vw] md:h-[18.5em] lg:w-[35.3vw] lg:h-[13em] bg-white overflow-auto overflow-x-hidden dark:bg-dark">
              {movieList?.length ? (
                movieList.map((movie, index) => (
                  <SearchMiniList
                    id={movie.id}
                    key={index}
                    poster={movie.poster_path}
                    title={movie.title}
                    release={movie.release_date}
                    rate={movie.vote_average.toFixed(1)}
                  />
                ))
              ) : (
                <Fragment>
                  <div className="bg-tx h-6 dark:bg-black">
                    <div className="h-[0.5em] font-bold text-main text-[1.2em] text-center">
                      Trending
                      <FontAwesomeIcon
                        className="trending-icon"
                        icon={faFire}
                      />
                    </div>
                  </div>

                  {trendList.map((movie, index) => (
                    <SearchMiniList
                      id={movie.id}
                      key={index}
                      poster={movie.poster_path}
                      title={movie.title}
                      release={movie.release_date}
                      rate={movie.vote_average.toFixed(1)}
                    />
                  ))}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
