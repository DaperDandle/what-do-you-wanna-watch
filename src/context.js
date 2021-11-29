import React, { useContext, useState, useEffect, useCallback } from "react";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=0eb8b166bafb6426da3661fdd1c78069&language=en-US&query=";
let imgUrl = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [filter, setFilter] = useState("title");
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `${url}${searchTerm}&page=1&include_adult=false`
    );
    const data = await response.json();
    setLoading(false);
    const { results } = data;
    const newMovies = results.map((movie) => {
      const { title, overview, poster_path, release_date, id } = movie;
      return {
        desc: overview,
        img: `${imgUrl}${poster_path}`,
        date: release_date,
        title,
        id,
      };
    });
    setMovies(newMovies);
  }, [searchTerm]);

  const fetchImgData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/configuration?api_key=0eb8b166bafb6426da3661fdd1c78069"
    );
    const data = await response.json();
    imgUrl = `${data.images.secure_base_url}w300`;
  };

  useEffect(() => {
    fetchImgData();
    fetchMovies();
  }, [searchTerm, fetchMovies]);
  return (
    <AppContext.Provider value={{ loading, setSearchTerm, setFilter, movies }}>
      {console.log(movies)}
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
