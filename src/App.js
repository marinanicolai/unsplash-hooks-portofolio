import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { StorageProvider } from "./providers";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ImageItem from "./components/ImageItem";
import Home from "./pages/Home";
import User from "./pages/User";
import Photo from "./pages/Photo";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <StorageProvider>
        <BrowserRouter>
          <Intro />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search/:searchTerm" element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="item/:id" element={<ImageItem />} />
            <Route path="user/:username" element={<User />} />
            <Route path="photo/:photoid" element={<Photo />} />
          </Routes>
        </BrowserRouter>
      </StorageProvider>
    </div>
  );
}

export default App;
