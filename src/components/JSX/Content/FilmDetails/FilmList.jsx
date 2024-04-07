import React from "react";
import ContentMenu from "./ContentMenu";
import MiniList from "./MiniList";

function FilmList({ filmList, listName }) {
  return (
    <div className="content__films">
      <div className="content__container">
        <ContentMenu Name={listName} />
        <div className="content__list dark:bg-dark">
          {filmList.map((list, index) => (
            <MiniList
              index={list.id}
              key={index}
              Title={list.title || list.name}
              Nation={list.original_language}
              Year={list.release_date || list.first_air_date}
              Image={list.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmList;
