import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Item from "./components/Item";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="item/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
