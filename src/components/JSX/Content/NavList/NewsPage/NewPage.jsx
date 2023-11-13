import React, { useEffect, useRef } from "react";
import "./news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function NewPage() {
  const list = [
    {
      img: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: "Lossless Youths",
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://i.redd.it/tc0aqpv92pn21.jpg",
      title: "Estrange Bond",
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
      title: "The Gate Keeper",
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://images7.alphacoders.com/878/878663.jpg",
      title: 'Last Trace Of Us"',
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
      title: "Urban Decay",
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
      title: "The Migration",
      infor: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const activate = (e) => {
      const slider = sliderRef.current;
      const items = slider.querySelectorAll(".item");

      if (e.target.matches(".next")) {
        slider.append(items[0]);
      } else if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };

    document.addEventListener("click", activate);

    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  return (
    <div className="news">
      <main>
        <ul ref={sliderRef} className="slider">
          {list.map((poster) => (
            <li
              className="item"
              style={{
                backgroundImage: `url(${poster.img})`,
              }}
            >
              <div className="content">
                <h2 className="title">{poster.title}</h2>
                <p className="description">{poster.infor}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <FontAwesomeIcon
            className="btn prev"
            name="arrow-back-outline"
            icon={faCircleArrowLeft}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="btn next"
            name="arrow-forward-outline"
            icon={faCircleArrowRight}
          ></FontAwesomeIcon>
        </nav>
      </main>
    </div>
  );
}

export default NewPage;
