import React from "react";



const ImageModal = ({ item, index, likes, setCurrentImageIndex }) => {
    return (
      <div className="col-lg-12 col-md-12 mb-4 mb-lg-0">
        <img
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
