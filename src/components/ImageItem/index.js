import React from "react";
import { Box, Card, Image, Text, Badge, Button, Group } from "@mantine/core";
//import { Image } from "./ImageItem.styles";

const Item = ({ item, index, likes, setCurrentImageIndex }) => {
  const handleClick = () => {
    console.log("clicked from the compo");
  }
  
  const handleClick2 = () => {
    console.log("clicked from the image comp");
  }
  return (
    <Box
      onClick={handleClick()} 
      sx={(theme) => ({
        borderRadius: theme.radius.md,
        cursor: "pointer",
      })}
    >
      <Image
         
        key={item.id}
        src={item.urls.small}
        alt="sample"
        style={{ width: "100%", height: "auto !important" }}
        onClick={() => setCurrentImageIndex(index)}
      />
  
    </Box>
  );
};
export default Item;
