import React from "react";
import { Image } from "./ImageModal.styles";

const ImageModal = ({ item, index, likes, setCurrentImageIndex }) => {
  return (
    <div className="col-lg-12 col-md-6 mb-4 mb-lg-0">
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

export default ImageModal;
