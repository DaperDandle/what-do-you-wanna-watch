import React from "react";
import SearchBar from "../components/SerachBar.js";
import MovieList from "../components/MovieList.js";
import PageControl from "../components/PageControl.js";
const Home = () => {
  return (
    <React.Fragment>
      <main>
        <h1 className="title">What Do You Wanna Watch?</h1>
        <SearchBar />
        <MovieList />
        <PageControl />
      </main>
    </React.Fragment>
  );
};

export default Home;
