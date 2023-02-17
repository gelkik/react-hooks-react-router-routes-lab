import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor)=>{
        return (
          <div key={actor.name}>
            {actor.name}
            {actor.movies.map((data)=>{
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

export default Actors;
