import React from "react";
import ContentMenu from "./ContentMenu";
import MiniList from "./MiniList";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function FilmList({ filmList, listName }) {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-[-15%] right-[2.85%]">
        <button
          className="custom-btn btn-12 mt-2 hidden md:inline-block"
          onClick={onClick}
        >
          <span>
            <FontAwesomeIcon
              className=" absolute top-[17%] left-[35%] text-[2em] dark:text-main"
              icon={faChevronRight}
            />
          </span>

          <span>
            <FontAwesomeIcon
              className="  absolute top-[17%] left-[35%] text-[2em] dark:text-main"
              icon={faChevronRight}
            />
          </span>
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-[-15%] left-[2.18%]">
        <button
          className="custom-btn btn-12 mt-2 hidden md:inline-block"
          onClick={onClick}
        >
          <span>
            <FontAwesomeIcon
              className=" absolute top-[17%] left-[35%] text-[2em] dark:text-main"
              icon={faChevronLeft}
            />
          </span>

          <span>
            <FontAwesomeIcon
              className="  absolute top-[17%] left-[35%] text-[2em] dark:text-main"
              icon={faChevronLeft}
            />
          </span>
        </button>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    draggable: true,
    variableWidth: false,
    Swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-dark pb-10 md:h-[26rem] md:pb-0">
      <ContentMenu Name={listName} />
      <Slider {...settings}>
        {filmList.map((list, index) => (
          <MiniList
            index={list.id}
            key={index}
            Title={list.title || list.name}
            originalTitle={list.original_title}
            Year={list.release_date || list.first_air_date}
            Image={list.backdrop_path}
          />
        ))}
      </Slider>
    </div>
  );
}

export default FilmList;
