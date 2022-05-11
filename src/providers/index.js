import React, { useCallback } from "react";
import { useLocalStorage } from "react-use";

export const StorageContext = React.createContext();

export const StorageProvider = ({ children }) => {
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
