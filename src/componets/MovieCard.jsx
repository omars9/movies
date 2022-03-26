import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {
  const { rating, name, date, image } = movie;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <StarRating rating={rating} />
        <img src={image} alt="" />
        <h3> {name} </h3>
        <h3> {date} </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
