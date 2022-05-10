import React from "react";
import ImageGallery from "../../components/PhotoGallery";
import { useContext } from "react";
import { StorageContext } from "../../App.js";

const Favorites = () => {
  const { favorites, isLoading, isError } = useContext(StorageContext);

  return (
    <>
      <div>{favorites && <ImageGallery data={favorites} />}</div>
    </>
  );
};

export default Favorites;
