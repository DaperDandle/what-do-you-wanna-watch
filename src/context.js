import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState("false");
  const [searchTerm, setSearchTerm] = useState("a");
  const [filter, setFilter] = useState("title");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/the%20thing",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key":
            "1eb0280929msh0e03420168b2070p1960e4jsnf08d0d557537",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <AppContext.Provider value={{ loading, setSearchTerm, setFilter, movies }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
