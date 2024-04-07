import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideShow from "./SlideShow";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Auth } from "../../../JS/API";

// Control
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

function MovieShow() {
  const [slideList, setSliceList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Auth}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=8",
      options
    )
      .then((response) => response.json())
      .then((response) => setSliceList(response.results))
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
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "hidden",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <div className="h-[51.5em] mt-[-1.2em]">
      <Slider {...settings}>
        {slideList.map((movie, index) => (
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
  );
}

export default MovieShow;
