import logo from "./logo.svg";
import "./App.css";
import { moviesData } from "./data";
import { useState } from "react";
import MovieList from "./componets/MovieList";
import Search from "./componets/Search";
import AddMovie from "./componets/AddMovie";

function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(1);
  const handleChange = (e) => setSearch(e.target.value);
  console.log(movieList);

  const handleAdd = (newMovie) => setMovieList([...movieList, newMovie]);

  const handleRating = (y) => setRating(y);

  return (
    <div className="App">
      <Search
        search={search}
        handleChange={handleChange}
        rating={rating}
        handleRating={handleRating}
      />
      <MovieList
        movies={movieList.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase()) &&
            el.rating >= rating
        )}
      />
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
