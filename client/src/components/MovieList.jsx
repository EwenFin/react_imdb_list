import React from 'react';
import Movie from './Movie.jsx'

const MovieList = (props) => {

    const movies = props.data.map((movie) => {
      return (
        <Movie title= {movie.title} key = { movie.id }>{ movie.text}
        </Movie>
      )      
    })

    return(
      <div className="movie-list">
        { movies }
      </div>
      )
  
}

export default MovieList