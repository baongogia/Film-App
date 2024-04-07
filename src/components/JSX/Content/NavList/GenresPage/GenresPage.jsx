import React, { useEffect, useState } from "react";
import { API_KEY, Auth } from "../../../../JS/API";
import SlideShow from "../../HomePage/SlideShow";
import Slider from "react-slick";
import ContentSearch from "../../HomePage/ContentSearch";
import FilmList from "../../FilmDetails/FilmList";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="">
      <div
        className="text-[4em] absolute top-0 right-0 cursor-pointer pl-2 pt-[35vh] pb-[41.5vh]
        hover:bg-zinc-400 hover:bg-opacity-30 mt-6"
        onClick={onClick}
      >
        <div className="">
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="">
      <div
        className="text-[4em] absolute text-center cursor-pointer pl-3 pt-[35vh] pb-[41.5vh]
       hover:bg-zinc-400 hover:bg-opacity-30 z-[1] mt-5"
        onClick={onClick}
      >
        <ArrowBackIos className="" fontSize="large" />
      </div>
    </div>
  );
}

function GenresPage() {
  const [showList, setShowList] = useState([]);
  const [actionList, setActionList] = useState([]);
  const [horrorList, setHorrorList] = useState([]);
  const [romanceList, setRomanceList] = useState([]);
  const [dramaList, setDramaList] = useState([]);
  const [comedyList, setComedyList] = useState([]);
  const [sciencefList, setSciencefList] = useState([]);

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
    fetchMoviesByGenre(53, setShowList);
    fetchMoviesByGenre(28, setActionList);
    fetchMoviesByGenre(27, setHorrorList);
    fetchMoviesByGenre(10749, setRomanceList);
    fetchMoviesByGenre(18, setDramaList);
    fetchMoviesByGenre(35, setComedyList);
    fetchMoviesByGenre(878, setSciencefList);
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <div className="h-full mt-[-1.4em]">
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
      <FilmList filmList={dramaList} listName={"drama"} />
      <FilmList filmList={sciencefList} listName={"Science Fiction"} />
      <ContentSearch />
      <FilmList filmList={comedyList} listName={"COMEDY"} />
      <FilmList filmList={romanceList} listName={"ROMANCE"} />
    </div>
  );
}

export default GenresPage;
