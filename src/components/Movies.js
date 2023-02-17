import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie)=>{
        return (
        <div key={movie.title}>
          <ul>{movie.title}</ul>
          <ul>{movie.time}</ul>
          {movie.genres.map(data=>{
            return (
            <li key={data}>{data}</li>
            )
          })}
        </div>
        )
      })}
    </div>
  )
}

export default Movies;
