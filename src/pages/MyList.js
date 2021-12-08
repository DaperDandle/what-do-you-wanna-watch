import React from "react";
import MyMovieList from "../components/MyMovieList";

const MyList = () => {
  return (
    <main>
      <h1 className="title">My Watchlist</h1>
      <MyMovieList />
    </main>
  );
};

export default MyList;
