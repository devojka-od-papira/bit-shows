import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import About from "./view/about";
import Favorite from "./view/favorites";
import NavBar from "./components/navbar";
import Details from "./view/detail";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
