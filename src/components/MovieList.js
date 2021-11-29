import React from "react";
import { useGlobalContext } from "../context";
import SingleMovie from "./SingleMovie";

const MovieList = () => {
  const { movies } = useGlobalContext();
  return (
    <section>
      <div>
        {movies.map((movie) => {
          return <SingleMovie key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
