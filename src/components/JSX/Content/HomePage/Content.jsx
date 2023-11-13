import React, { useContext } from "react";
import ContentSearch from "./ContentSearch";
import { MyContext } from "../FilmDetails/ContextProvider";
import FilmList from "../FilmDetails/FilmList";

export default function Content() {
  const movieList = useContext(MyContext);
  
  const theater = [...movieList].splice(0, 5);
  const comin = [...movieList].splice(5, 10);
  const chart = [...movieList].splice(10, 15);
  const tvseries = [...movieList].splice(15, 20);
  const trend = [...movieList].splice(12, 17);

  return (
    <div className="content__all">
      <FilmList filmList={theater} listName={"IN THEATERS"} />
      <FilmList filmList={comin} listName={"COMING SOON"} />

      <ContentSearch />

      <FilmList filmList={chart} listName={"CHARTS"} />
      <FilmList filmList={tvseries} listName={"TV SERIES"} />
      <FilmList filmList={trend} listName={"TRENDING"} />
    </div>
  );
}
