import React, { useEffect, useState, useCallback } from "react";
//import { useGlobalContext } from "../context";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const Filter = () => {
  const [genres, setGenres] = useState([]);
  //const { genre, setGenre } = useGlobalContext();

  const fetchGenres = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.genres);
    setGenres(data.genres);
  }, []);

  useEffect(() => fetchGenres(), [fetchGenres]);
  return (
    <section>
      <select name="genre" id="genre">
        {genres.map((genre) => {
          const { name, id } = genre;
          return (
            <option value={name} key={id}>
              {genre}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Filter;
