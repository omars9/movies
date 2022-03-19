import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
    const {rating,name,date,image}=movie
  return (
    <div className='movie-card'>
  <StarRating rating={rating} />
    <img src={image} alt="" />
    <h3> {name} </h3>
    <h3> {date} </h3>
    </div>
  )
}



export default MovieCard