import React from "react";
import { actors } from "../data";

function Actors() {
  return(
  <>
     <h1>Actors</h1>;
     <div>{actors.name}</div>
     <ul>
      <li>{actors.movies}</li>
     </ul>
  </>
  )
}

export default Actors;
