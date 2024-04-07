import React, { useEffect, useState } from "react";
import SlideShow from "../../HomePage/SlideShow";
import Slider from "react-slick";
import ContentSearch from "../../HomePage/ContentSearch";
import FilmList from "../../FilmDetails/FilmList";
import { Auth } from "../../../../JS/API";
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

function TopRatedPage() {
  const [showList, setShowList] = useState([]);
  const [showList2, setShowList2] = useState([]);
  const [showList3, setShowList3] = useState([]);
  const [showList4, setShowList4] = useState([]);
  const [showList5, setShowList5] = useState([]);
  const [showList6, setShowList6] = useState([]);
  const [showList7, setShowList7] = useState([]);

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
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`,
        options
      );
      const data = await response.json();
      setStateFunction(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesByTopRate(10, setShowList);
    fetchMoviesByTopRate(2, setShowList2);
    fetchMoviesByTopRate(4, setShowList3);
    fetchMoviesByTopRate(5, setShowList4);
    fetchMoviesByTopRate(6, setShowList5);
    fetchMoviesByTopRate(7, setShowList6);
    fetchMoviesByTopRate(8, setShowList7);
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
      <div className="h-full mt-[-1.1em]">
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

      <FilmList filmList={showList2} listName={"update"} />
      <FilmList filmList={showList3} listName={"the best"} />
      <ContentSearch />
      <FilmList filmList={showList4} listName={"highest revenue"} />
      <FilmList filmList={showList5} listName={"trending"} />
      <FilmList filmList={showList6} listName={"chill"} />
      <FilmList filmList={showList7} listName={"Can't miss"} />
    </div>
  );
}

export default TopRatedPage;
