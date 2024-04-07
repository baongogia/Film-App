import React, { useEffect, useRef, useState } from "react";
import "./news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Auth, IMG_URL } from "../../../../JS/API";
import { Link } from "react-router-dom";

function NewPage() {
  // API
  const [incomingList, setIncomingList] = useState([]);

  const list = incomingList.slice(1, 7);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Auth}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=5",
      options
    )
      .then((response) => response.json())
      .then((response) => setIncomingList(response.results))
      .catch((err) => console.error(err));
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const activate = (e) => {
      const slider = sliderRef.current;
      const items = slider.querySelectorAll(".item");

      if (e.target.closest(".next")) {
        slider.append(items[0]);
      } else if (e.target.closest(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    nextBtn.addEventListener("click", activate);
    prevBtn.addEventListener("click", activate);

    return () => {
      nextBtn.removeEventListener("click", activate);
      prevBtn.removeEventListener("click", activate);
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
                backgroundImage: `url(${IMG_URL}${poster.backdrop_path})`,
              }}
            >
              <div className="content">
                <h2 className="title">{poster.title}</h2>
                <p className="description">{poster.overview}</p>
                <div className="flex">
                  <div className="font-bold inco-btn">INCOMING</div>
                  <Link className="ml-6" to={`/FilmDetails/${poster.id}`}>
                    <div className=" inco-btn font-bold hover:bg-white hover:text-dark">
                      WATCH TRAILER
                    </div>
                  </Link>
                </div>
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
