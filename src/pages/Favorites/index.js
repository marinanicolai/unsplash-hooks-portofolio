import React, { useContext } from "react";
import ImageGallery from "../../components/PhotoGallery";
import { StorageContext } from "../../providers";

const Favorites = () => {
  const { favorites } = useContext(StorageContext);

  return (
    <div>
      {favorites && <ImageGallery data={favorites} />}
    </div>
  );
};

export default Favorites;
