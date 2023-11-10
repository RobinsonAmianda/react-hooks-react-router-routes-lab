import React from "react";
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import {} from "react-router-dom";


   


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
    <NavBar/>
    <Route path="/" element={<Home/>}/>
    <Route  path="/Movies" element={<Movies/>}/>
    <Route path="/Directors" element={<Directors/>}/>
    <Route path="/Actors" element={<Actors/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
