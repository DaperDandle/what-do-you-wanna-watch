import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import stringSimilarity from "string-similarity";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, movies } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchMovies = () => {
    setSearchTerm(searchValue.current.value);
    const movieTitles = movies.map((movie) => movie.title);
    console.log(searchTerm);
    const matches = stringSimilarity.findBestMatch(searchTerm, movieTitles);
    console.log(matches);
    //const newMovies = matches.sort((a, b) => a.rating - b.rating);
    //setMovies(newMovies);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter a movie name"
        className="search-bar"
        ref={searchValue}
        onChange={searchMovies}
      ></input>
    </form>
  );
};

export default SearchBar;
