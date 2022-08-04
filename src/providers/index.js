import React, { useCallback } from "react";
import { useLocalStorage } from "react-use";

export const StorageContext = React.createContext();

export const StorageProvider = ({ children }) => {
  const [favorites, setValue] = useLocalStorage("favorites", []);

  const onFav = useCallback(
    (image) => {
      const favs = [...favorites, image];
      setValue(favs);
    },
    [favorites, setValue]
  );

  const onUnFav = useCallback(
    ({ id }) => {
      const filteredImages = favorites.filter((image) => image.id !== id);
      setValue(filteredImages);
    },
    [favorites, setValue]
  );

  return (
    <StorageContext.Provider
      value={{
        onFav,
        onUnFav,
        favorites,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
