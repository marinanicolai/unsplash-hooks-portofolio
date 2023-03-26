import React from "react";
import { Box } from "@mantine/core";
import { Image } from "./ImageItem.styles";

const Item = ({ item, index, likes, setCurrentImageIndex }) => {
  return (
    <Box
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
