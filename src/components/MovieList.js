import React from "react";
import { useGlobalContext } from "../context";
import SingleMovie from "./SingleMovie";

const MovieList = () => {
  const { movies, loading } = useGlobalContext();
  if (movies.length < 1) {
    return <h1 className="title">No Movies Match Your Search</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="movie-list">
      {movies.map((movie) => {
        return <SingleMovie key={movie.id} {...movie} />;
      })}
    </section>
  );
};

export default MovieList;
