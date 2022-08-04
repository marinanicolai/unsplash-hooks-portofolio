import React from "react";
import ImageGallery from "../../components/PhotoGallery";
import { useContext } from "react";
import { StorageContext } from "../../providers";

const Favorites = () => {
  const { favorites } = useContext(StorageContext);

  return (
    <>
      <div>{favorites && <ImageGallery data={favorites} />}</div>
    </>
  );
};

export default Favorites;
