import React from "react";
import { useGlobalContext } from "../context";
import SingleMovie from "./SingleMovie";

const MyMovieList = () => {
  const { myMovies } = useGlobalContext();
  if (!myMovies) {
    return <h1>No Movies Added</h1>;
  }
  return (
    <section className="movie-list">
      {myMovies.map((movie) => {
        const { id, desc, title, img, date } = movie;
        return (
          <SingleMovie
            key={id}
            desc={desc}
            title={title}
            img={img}
            date={date}
          />
        );
      })}
    </section>
  );
};

export default MyMovieList;
