import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SingleMovie = ({ id, desc, title, img, date }) => {
  const [descOpen, setDescOpen] = useState(false);
  const { myMovies, setMyMovies } = useGlobalContext();

  const addMovieToList = () => {
    const newListItem = {
      id: id,
      desc: desc,
      title: title,
      img: img,
      date: date,
    };
    if (!myMovies.includes(id)) {
      setMyMovies([...myMovies, newListItem]);
    } else {
      console.log("already in list");
    }
  };
  return (
    <div className="movie">
      <h2>{title}</h2>
      <button onClick={() => addMovieToList()}>+</button>
      <img src={img} alt={title} className="movie-img" />
      <p>{date}</p>
      <p className={descOpen ? "desc-open" : "desc"}>{desc}</p>
      <button onClick={() => setDescOpen(!descOpen)}>
        {descOpen ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default SingleMovie;
