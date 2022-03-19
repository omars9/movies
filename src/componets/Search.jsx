import React from "react";
import StarRating from "./StarRating";

const Search = ({ search, handleChange, rating, handleRating }) => {
  return (
    <div className="header-container">
      <h1>Our movie app</h1>
      <div className="search-container">
        <form action="">
          <input type="text" value={search} onChange={handleChange} />
        </form>
        <StarRating rating={rating} handleRating={handleRating} />
      </div>
    </div>
  );
};

export default Search;
