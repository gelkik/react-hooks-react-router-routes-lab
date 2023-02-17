import React from "react";
import { directors } from "../data";

function Directors() {
  return (
      <>
        <h1>Directors Page</h1>
        {directors.map((director)=>{
          return(
            <div key={director.name}>{director.name}
            {director.movies.map((data)=>{
              return (
              <li key={data}>{data}</li>
              )
            })}
            </div>
          )
        })}
      </>
    
  )
}

export default Directors;
