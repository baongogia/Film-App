import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../JS/API";
import { hideSearchBox, ratingFilm, showSearchBox } from "../../../JS/Action";
import SearchMiniList from "./SearchMiniList";

export default function ContentSearch() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [trendList, setTrendList] = useState([]);

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
    <div id="search" className="content__search dark:bg-dark">
      <img
        className="content__search--img"
        src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
        alt="#"
      ></img>
      <div className="content__search--overlay"></div>

      <div className="content__search--wrap">
        <div className="content__search--title">
          <p>Can't Find Anything You Like?</p>
          <p>
            Search for thousands of unique movies from our growing database...
          </p>
        </div>
        <div className="content__search--bar">
          {/* Search bar */}
          <input
            className="content__search--bar--box outline-none focus:border-main focus:border-double focus:border-[0.2em] dark:bg-dark dark:text-white "
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onFocus={showSearchBox}
            onBlur={hideSearchBox}
            onChange={onTextChange}
            name="earch"
          ></input>

          <FontAwesomeIcon
            className="text-black content__search--bar--icon dark:text-main"
            icon={faSearch}
          />
          {/* Search box */}
          <div
            id="SearchBox"
            onLoad={ratingFilm}
            className="search-box absolute top-[15.7em] rounded-[0.8em] overflow-auto border-solid border-[0.2em]
                         border-main opacity-0 transition-opacity duration-300 pointer-events-none"
          >
            <div className="w-[33.3em] h-[13em] bg-white overflow-auto dark:bg-dark">
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
