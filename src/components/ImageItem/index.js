import React from "react";
import { ImageContainer, Image } from "./ImageItem.styles";

const Item = ({ item, index, likes, setCurrentImageIndex }) => {
  return (
    <ImageContainer>
      <Image
        src={item.urls.small}
        alt="sample"
        className="img-responsive w-100"
        onClick={() => setCurrentImageIndex(index)}
      />
    </ImageContainer>
  );
};
export default Item;
