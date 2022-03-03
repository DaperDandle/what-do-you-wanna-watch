import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { genres, setCurrentGenre } = useGlobalContext();
  const genreValue = useRef("");
  const chooseGenre = () => setCurrentGenre(genreValue.current.value);
  return (
    <section>
      <select name="genre" id="genre" ref={genreValue} onChange={chooseGenre}>
        {genres.map((genre) => {
          const { name, id } = genre;
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Filter;
