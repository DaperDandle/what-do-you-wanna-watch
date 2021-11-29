import React from "react";

const SingleMovie = ({ desc, title, img, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{date}</p>
      <p>{desc}</p>
    </div>
  );
};

export default SingleMovie;
