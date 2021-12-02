import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchMovies = () => {
    setSearchTerm(searchValue.current.value);
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
