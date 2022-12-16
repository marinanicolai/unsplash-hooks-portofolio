import React from "react";
import { Image } from "./ImageItem.styles";

const Item = ({ item, index, likes, setCurrentImageIndex }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <Image
        key={item.id}
        src={item.urls.small}
        alt="sample"
        className="img-responsive w-100"
        onClick={() => setCurrentImageIndex(index)}
      />
    </div>
  );
};
export default Item;
