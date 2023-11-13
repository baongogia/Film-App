import { createContext, useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../../JS/API";

export const MyContext = createContext([]);

function ContextProvider({ children }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/3/discover/movie?api_key=" + API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
      })
      .catch((error) => console.error(error));
  }, []);
  // console.log(movieList)
  return <MyContext.Provider value={movieList}>{children}</MyContext.Provider>;
}

export default ContextProvider;
