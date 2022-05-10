import React, { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "react-use";
import "./App.css";

import Nav from "./components/Nav";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ImageItem from "./components/ImageItem";
import Home from "./pages/Home";

export const StorageContext = React.createContext();

function App() {
  const [favorites, setValue, remove] = useLocalStorage("favorites", []);

  const onFav = useCallback(
    (image) => {
      const favs = [...favorites, image];
      setValue(favs);
    },
    [favorites]
  );

  const onUnFav = useCallback(
    ({ image, id, removeImage }) => {
      const filteredImages = favorites.filter((image) => image.id !== id);
      setValue(filteredImages);
    },
    [favorites]
  );

  return (
    <div className="App">
      <StorageContext.Provider
        value={{
          onFav,
          onUnFav,
          favorites,
        }}
      >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search/:searchTerm" element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="item/:id" element={<ImageItem />} />
          </Routes>
        </BrowserRouter>
      </StorageContext.Provider>
    </div>
  );
}

export default App;
