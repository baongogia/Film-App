import React, { Component } from "react";
import { List } from "./ListOfFilms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
export default class Content extends Component {
  render() {
    return (
      <div class="content">
        <div class="content__list--poster">
          <div class="content__list--poster--trailer">
            <FontAwesomeIcon
              className="content__list--poster--trailer-icon"
              icon={faPlay}
            />
          </div>
          <div class="content__list--poster-text">
            <div class="content__list--poster-name">RINGS</div>
            <div class="content__list--poster-title">EVIL IS REBOND</div>
            <div class="content__list--poster-infor">
              There’s a time capsule quality that aids The Ring, a horror film
              about a creepy video<br></br> that will kill you seven days after
              you watch it...
            </div>
            {/* <div class="content__list--poster-rating">
                <FontAwesomeIcon
                  className="content__list--poster-rating-icon"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="content__list--poster-rating-icon"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="content__list--poster-rating-icon"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="content__list--poster-rating-icon"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="content__list--poster-rating-icon"
                  icon={faStar}
                />
              </div> */}
          </div>
        </div>
        <div class="content__navbar">
          <ul class="content__navbar--list">
            <li class="content__navbar--list--item">TRAILERS</li>
            <li class="content__navbar--list--item">NATION</li>
            <li class="content__navbar--list--item">GENRE</li>
            <li class="content__navbar--list--item">YEAR</li>
            <li class="content__navbar--list--item">MORE</li>
          </ul>
        </div>
        <div class="content__container">
          <div class="content__list">
            {List.map((list) => (
              <div class="content__list--icon" style={{backgroundImage: `url('${list.Image}')`}}>
                <div class="content__list__title">
                  <div class="content__list__title--name">{list.Title}</div>
                  <div class="content__list__title--nation">{list.Nation}</div>
                  <div class="content__list__title--year">{list.Year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
}
