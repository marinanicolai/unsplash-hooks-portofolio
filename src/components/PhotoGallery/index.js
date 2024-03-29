import React, { useContext, useState, useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Box} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import ImageItem from "../ImageItem";
import "reactjs-popup/dist/index.css";
import { StorageContext } from "../../providers";
import { Link, useLocation } from "react-router-dom";
import { CollectionContext } from "../Context/Collection";
import Photo from "../../pages/Photo";
import ImageModal from "../ImageModal";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconHeartFilled, IconHeart } from "@tabler/icons-react";
import { HeartIcon } from "@primer/octicons-react";




const ImageGallery = ({ data }) => {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const currentImage = data?.[currentImageIndex];
  const { favorites, onFav, onUnFav } = useContext(StorageContext);
  const arrayLength = data?.length;
  const isFirstPhoto = data[0]?.id === currentImage?.id;
  const isLastPhoto = data[arrayLength - 1]?.id === currentImage?.id;
  const currentImageUser = data?.[currentImageIndex]?.user;
  const hideUserLink = location.pathname?.includes("user");
  const { collection, setCollection } = useContext(CollectionContext);
  const [opened, { open, close }] = useDisclosure(false);
  const [isFavorite, setIsFavorite] = useState(false);


  const handleClick = (id) => {
    setCollection((current) => [...current, id]);
  };

  function toggleModal() {
    setCurrentImageIndex(null);
  }

  

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
    
    console.log(currentImage);
  };
  return (
    <div>
       <Modal
        opened={opened}
        onClose={close}
        centered
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        {isFavorite ? <IconHeartFilled onClick={toggleFavorite} /> : <IconHeart onClick={toggleFavorite} />}
            


             {data?.map((item, index) => {
          return currentImageIndex === index ? (

            <Link key={item.id} to={`photo/${item.id}`} state={item}>
              {" "}
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                setCurrentImageIndex={setCurrentImageIndex}
              />
              
            </Link>
            
          ) : null;
        })}
            
          
      </Modal>

      <Box
        sx={() => {
          return {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "1000px",
            margin: "0 auto",
          };
        }}
      >
        {data?.map((item, index) => {
          return (
            <Group key={item.id} position="center">
              <div onClick={open}>
                <ImageItem
                  key={item.id}
                  item={item}
                  index={index}
                  likes={item.likes}
                  setCurrentImageIndex={setCurrentImageIndex}
                />
              </div>
            </Group>
          );
        })}
      </Box>
    </div>
  );
};

export default ImageGallery;