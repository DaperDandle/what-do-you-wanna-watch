import React from "react";
import { useGlobalContext } from "../context";
import SingleMovie from "./SingleMovie";

const MyMovieList = () => {
  const { MyMovieList } = useGlobalContext();
  if (!MyMovieList) {
    return <h1>No Movies Added</h1>;
  }
  return (
    <section>
      {MyMovieList.map((movie) => {
        const { desc, title, img, date } = movie;
        return <SingleMovie desc={desc} title={title} img={img} date={date} />;
      })}
    </section>
  );
};

export default MyMovieList;
