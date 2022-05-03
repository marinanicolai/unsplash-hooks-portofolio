import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <img
        src={item.urls["small"]}
        alt="sample"
        className="img-responsive w-100"
      />
    </div>
  );
};

export default Item;
