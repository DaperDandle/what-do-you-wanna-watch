import React, { useContext, useState, useEffect, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
let imgUrl = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  // const [filter, setFilter] = useState("title");
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}${searchTerm}&page=1&include_adult=false`
      );
      const data = await response.json();

      const { results } = data;
      results.sort((a, b) => {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      if (results) {
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
        setLoading(false);
      } else {
        setMovies([]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [searchTerm]);

  const fetchImgData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    const data = await response.json();
    imgUrl = `${data.images.secure_base_url}w300`;
  };

  useEffect(() => {
    fetchImgData();
    fetchMovies();
  }, [searchTerm, fetchMovies]);
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, setSearchTerm, /*setFilter,*/ movies }}
    >
      {console.log(movies)}
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
