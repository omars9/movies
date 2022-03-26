import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Search = ({ search, handleChange, rating, handleRating }) => {
  return (
    <div className="header-container">
      <Link to={`/`}>
        {" "}
        <h1 className="Nom">Our movie app</h1>
      </Link>

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
