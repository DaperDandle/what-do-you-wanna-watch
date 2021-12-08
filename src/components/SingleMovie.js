import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context";

const SingleMovie = ({ id, desc, title, img, date }) => {
  const [descOpen, setDescOpen] = useState(false);
  // get movie list from context
  const { myMovies, setMyMovies } = useGlobalContext();

  const descRef = useRef(null);

  const checkDesc = (e) => {
    console.log(e);
    return e.offsetHeight < e.scrollHeight;
  };

  const addMovieToList = () => {
    const newListItem = {
      id: id,
      desc: desc,
      title: title,
      img: img,
      date: date,
    };

    // check if the movie is already in the list
    if (!myMovies.some((e) => e.id === id)) {
      // copy existing items in myMovies and then add the new movie info
      setMyMovies([...myMovies, newListItem]);
      window.localStorage.setItem("item", "id");
      //window.localStorage.setItem("myMovies", JSON.stringify(myMovies));
    } else {
      console.log("already in list");
    }
  };
  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={img} alt={title} className="movie-img" />
      <p>{date}</p>
      <button onClick={() => addMovieToList()}>+ Add to My Watchlist</button>
      <p ref={descRef} className={descOpen ? "desc-open" : "desc"}>
        {desc}
      </p>

      <button onClick={() => setDescOpen(!descOpen)}>
        {descOpen ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default SingleMovie;
