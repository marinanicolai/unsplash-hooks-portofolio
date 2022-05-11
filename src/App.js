import React, { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { StorageProvider } from "./providers";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ImageItem from "./components/ImageItem";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <StorageProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search/:searchTerm" element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="item/:id" element={<ImageItem />} />
          </Routes>
        </BrowserRouter>
      </StorageProvider>
    </div>
  );
}

export default App;
