import "./App.css";
import { moviesData } from "./data";
import { useState } from "react";
import MovieList from "./componets/MovieList";
import Search from "./componets/Search";
import AddMovie from "./componets/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trailer from "./componets/Trailer";

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
      <BrowserRouter>
        <Search
          search={search}
          handleChange={handleChange}
          rating={rating}
          handleRating={handleRating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movieList.filter(
                  (el) =>
                    el.name.toLowerCase().includes(search.toLowerCase()) &&
                    el.rating >= rating
                )}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={<Trailer moviesData={movieList} />}
          />
        </Routes>
      </BrowserRouter>
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
