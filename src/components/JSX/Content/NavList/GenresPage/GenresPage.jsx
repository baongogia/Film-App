import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../../JS/API";
import SlideShow from "../../HomePage/SlideShow";
import Slider from "react-slick";
import ContentSearch from "../../HomePage/ContentSearch";
import FilmList from "../../FilmDetails/FilmList";

function GenresPage() {
  const [showList, setShowList] = useState([])
  const [actionList, setActionList] = useState([]);
  const [horrorList, setHorrorList] = useState([]);
  const [romanceList, setRomanceList] = useState([]);
  const [familyList, setFamilyList] = useState([]);
  const [comedyList, setComedyList] = useState([]);
  const [musicList, setMusicList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM4MzM4NjU4OWM5MmJlNWVhMDNiZDA0ZmI4MGRiOCIsInN1YiI6IjY1MjM3NDU2NzQ1MDdkMDBhYzRhOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9vrCoEGitOlsPTq6sfgWxJjEQsfkGN04YR8uO4FLBY",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setShowList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setActionList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHorrorList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRomanceList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setFamilyList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setComedyList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMusicList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="">
      <div className="h-[52em]">
        {/* Movie Show */}
        <Slider {...settings}>
          {showList.map((movie, index) => (
            <SlideShow
              key={index}
              background={movie.backdrop_path}
              title={movie.title}
              release={movie.release_date}
              vote={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </Slider>
      </div>
      {/* List film */}
      <FilmList filmList={actionList} listName={"ACTION"} />
      <FilmList filmList={horrorList} listName={"HORROR"} />
      <FilmList filmList={familyList} listName={"FAMILY"} />
      <FilmList filmList={romanceList} listName={"ROMANCE"} />
      <ContentSearch />
      <FilmList filmList={comedyList} listName={"COMEDY"} />
      <FilmList filmList={musicList} listName={"MUSIC"} />
    </div>
  );
}

export default GenresPage;
