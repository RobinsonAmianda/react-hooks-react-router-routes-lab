import React from "react";
import { movies } from "../data";

function Movies() {
  <>
  return(
  <h1>Movies page</h1>;
  <div>{movies.title}</div>
  <div>{movies.time}</div>
  <ul>
    <li>{movies.genres}</li>
  </ul>
  )
  </>
}

export default Movies;
