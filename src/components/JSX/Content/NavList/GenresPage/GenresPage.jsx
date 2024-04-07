import React, { useEffect, useState } from "react";
import { API_KEY, Auth } from "../../../../JS/API";
import SlideShow from "../../HomePage/SlideShow";
import Slider from "react-slick";
import ContentSearch from "../../HomePage/ContentSearch";
import FilmList from "../../FilmDetails/FilmList";

function GenresPage() {
  const [showList, setShowList] = useState([]);
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
      Authorization: `Bearer ${Auth}`,
    },
  };

  const fetchMoviesByGenre = async (genreId, setStateFunction) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
        options
      );
      const data = await response.json();
      setStateFunction(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesByGenre(53, setShowList); // Drama
    fetchMoviesByGenre(28, setActionList); // Action
    fetchMoviesByGenre(27, setHorrorList); // Horror
    fetchMoviesByGenre(10749, setRomanceList); // Romance
    fetchMoviesByGenre(10751, setFamilyList); // Family
    fetchMoviesByGenre(35, setComedyList); // Comedy
    fetchMoviesByGenre(10402, setMusicList); // Music
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
              filmID={movie.id}
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
