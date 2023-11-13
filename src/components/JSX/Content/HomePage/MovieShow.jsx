import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideShow from "./SlideShow";

function MovieShow() {
  const [slideList, setSliceList] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM4MzM4NjU4OWM5MmJlNWVhMDNiZDA0ZmI4MGRiOCIsInN1YiI6IjY1MjM3NDU2NzQ1MDdkMDBhYzRhOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9vrCoEGitOlsPTq6sfgWxJjEQsfkGN04YR8uO4FLBY'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setSliceList(response.results))
    .catch(err => console.error(err));
  },[]);

  // console.log(slideList)

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
  };

  console.log(slideList)

  return (
    <div className="h-[52em]">
      <Slider {...settings}>
        {slideList.map((movie, index) => (
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
  );
}

export default MovieShow;
