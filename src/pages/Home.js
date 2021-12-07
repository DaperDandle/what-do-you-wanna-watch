import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
const Home = () => {
  return (
    <React.Fragment>
      <main>
        <h1 className="title">What Do You Wanna Watch?</h1>
        <SearchBar />
        <MovieList />
      </main>
    </React.Fragment>
  );
};

export default Home;
