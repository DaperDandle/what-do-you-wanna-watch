import React from "react";
import SearchBar from "../components/SerachBar.js";
import MovieList from "../components/MovieList.js";
import PageControl from "../components/PageControl.js";
import Filter from "../components/Filter.js";
const Home = () => {
  return (
    <React.Fragment>
      <main>
        <Filter />
        <h1 className="title">What Do You Wanna Watch?</h1>
        <SearchBar />
        <MovieList />
        <PageControl />
      </main>
    </React.Fragment>
  );
};

export default Home;
