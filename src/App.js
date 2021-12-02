import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <main>
      <h1 className="title">What Do You Wanna Watch?</h1>
      <SearchBar />
      <MovieList />
    </main>
  );
}

export default App;
