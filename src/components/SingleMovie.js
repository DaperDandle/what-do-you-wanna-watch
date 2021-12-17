import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SingleMovie = ({ id, desc, title, img, date }) => {
  const [descOpen, setDescOpen] = useState(false);
  // get movie list from context
  const { myMovies, setMyMovies } = useGlobalContext();

  const descRef = useRef(null);

  // check to see if there is more text to display
  const checkDesc = (element) => {
    console.log(element);
    return element.scrollHeight > element.clientHeight;
  };

  let addButton = checkDesc(descRef);

  // add a movie to the list of my movies
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
      alert("already in list");
    }
  };
  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={img} alt={title} className="movie-img" />
      <p>{date}</p>
      <button onClick={() => addMovieToList()} className="btn">
        + Add to My Watchlist
      </button>
      <p ref={descRef} className={descOpen ? "desc-open" : "desc"}>
        {desc}
      </p>
      {addButton && (
        <button onClick={() => setDescOpen(!descOpen)} className="btn">
          {descOpen ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default SingleMovie;
