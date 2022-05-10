import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import { StorageContext } from "../../App.js";

const Item = ({ item }) => {
  const { favorites, onFav, onUnFav } = useContext(StorageContext);

  console.log("favorites", favorites);

  const isCurrentImageSaved =
    favorites && favorites?.find((image) => image.id === item.id);

  return (
    <div>
      <img
        src={item.urls["small"]}
        alt="sample"
        className="img-responsive w-100"
      />
      {isCurrentImageSaved ? (
        <FaRegStar onClick={() => onUnFav?.(item)} />
      ) : (
        <FaStar onClick={() => onFav(item)} />
      )}
    </div>
  );
};

export default Item;
