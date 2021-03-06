import React, { useContext, useState, useEffect, useCallback } from "react";
import NoImage from "../src/assets/images/image-not-found.svg";

const API_KEY = process.env.REACT_APP_API_KEY;
let imgUrl = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [page, setPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState(28);
  const [genres, setGenres] = useState([]);

  //
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
      );
      const data = await response.json();

      const { results } = data;
      // sort titles in alphabetical order
      results.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      // make sure results is populated
      if (results) {
        const unfilteredMovies = results.map((movie) => {
          const { title, overview, poster_path, release_date, id, genre_ids } =
            movie;
          const fullImgUrl = `${imgUrl}${poster_path}`;
          return {
            desc: overview,
            img: poster_path ? fullImgUrl : NoImage,
            date: release_date,
            genres: genre_ids,
            title,
            id,
          };
        });
        // const filteredMovies = unfilteredMovies.filter((movie) => {
        //   const { genres } = movie;
        //   return genres.includes(currentGenre);
        // });

        setMovies(unfilteredMovies);
        setLoading(false);
      }
      // set array to empty if fetch fails and catch error in rendering movie list
      else {
        setMovies([]);
        setLoading(false);
      }
    } catch (e) {
      //console.log(e);
      setLoading(false);
    }
  }, [searchTerm, page]);

  // get up to date image url from the api
  const fetchImgData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    const data = await response.json();
    imgUrl = `${data.images.secure_base_url}w300`;
  };

  const fetchGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    const { genres } = data;
    setGenres(genres);
  };

  useEffect(() => fetchGenres(), []);
  // fetch data when serach term changes
  useEffect(() => {
    fetchImgData();
    fetchMovies();
  }, [searchTerm, fetchMovies]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        /*setFilter,*/
        movies,
        setMovies,
        myMovies,
        setMyMovies,
        genres,
        currentGenre,
        setCurrentGenre,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to allow components to get the global context
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
