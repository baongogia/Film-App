import React, { useEffect, useState } from "react";
import ContentSearch from "./ContentSearch";
// import { MyContext } from "../FilmDetails/ContextProvider";
import FilmList from "../FilmDetails/FilmList";
import { Auth } from "../../../JS/API";

export default function Content() {
  const [theaterList, setTheaterList] = useState([]);
  const [incomingList, setIncomingList] = useState([]);
  const [tvseriesList, setTvSeriesList] = useState([]);
  const [chartsList, setChartList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);

  // console.log(theaterList)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Auth}`,
    },
  };

  const fetchMoviesByTopRate = async (pageNumber, setStateFunction) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
        options
      );
      const data = await response.json();
      setStateFunction(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesByTopRate(1, setTheaterList);
    fetchMoviesByTopRate(2, setIncomingList);
    fetchMoviesByTopRate(3, setTheaterList);
    fetchMoviesByTopRate(6, setTvSeriesList);
    fetchMoviesByTopRate(4, setChartList);
    fetchMoviesByTopRate(5, setTrendingList);
  }, []);

  return (
    <div className="">
      <FilmList filmList={trendingList} listName={"TRENDING"} />
      <FilmList filmList={theaterList} listName={"IN THEATERS"} />

      <ContentSearch />

      <FilmList filmList={chartsList} listName={"CHARTS"} />
      <FilmList filmList={tvseriesList} listName={"TV SERIES"} />
      <FilmList filmList={incomingList} listName={"COMING SOON"} />
    </div>
  );
}
