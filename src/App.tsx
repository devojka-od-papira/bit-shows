import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import About from "./view/about";
import Favorite from "./view/favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
