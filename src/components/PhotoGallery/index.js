import React from "react";
import ImageItem from "../ImageItem";

export default function ImageGallery({ data }) {
  return (
    <div>
      {data?.map((item) => {
        return <ImageItem key={item.id} item={item} />;
      })}
    </div>
  );
}
