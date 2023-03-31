import React, { useContext, useState, useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Box, Progress, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Slider from "react-slick";

import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

import ImageItem from "../ImageItem";
import "reactjs-popup/dist/index.css";
import { StorageContext } from "../../providers";
import { Link, useLocation } from "react-router-dom";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { CollectionContext } from "../Context/Collection";
import ImageModal from "../ImageModal";
import {
  closeIcon,
  leftArrow,
  rightArrow,
  favoriteIcon,
  savedFavoriteIcon,
  likedIcon,
} from "../../utils/resources/index";
import {
  Close,
  StyledArrow,
  Content,
  Header,
  SavedImg,
  Likes,
  LikedBox,
  Footer,
  AuthorInfo,
  StyledLink,
} from "./PhotoGallery.styles";
//import { AuthorInfo } from "../../pages/User/User.styles";

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

  console.log("State");
  console.log(collection);
  console.log("this is the data");
  console.log({ data });
  const handleClick = (id) => {
    setCollection((current) => [...current, id]);
  };
  function toggleModal() {
    setCurrentImageIndex(null);
  }

  const isCurrentImageSaved =
    favorites && favorites?.find((image) => image?.id === currentImage?.id);

  const Arrow = ({ direction }) => {
    const clickHandler = (direction) => {
      return direction === "left"
        ? setCurrentImageIndex(currentImageIndex - 1)
        : setCurrentImageIndex(currentImageIndex + 1);
    };
    const image =
      direction === "left" ? (
        <IconArrowRight size={16} />
      ) : (
        <IconArrowLeft size={16} />
      );
    return <div image={image} onClick={clickHandler} />;
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
        <Header>
          <div>
            {!hideUserLink && (
              <StyledLink to={`user/${currentImageUser?.username}`}>
                <AuthorInfo>
                  <img
                    className="profile"
                    src={currentImageUser?.profile_image.small}
                    alt="profile"
                  />

                  <div> {currentImageUser?.name}</div>
                </AuthorInfo>
              </StyledLink>
            )}
          </div>
        </Header>
        <Carousel maw={320} mx="auto" height={180}>
          {!isFirstPhoto && <Arrow direction={"left"} />}
          {data?.map((item, index) => {
            return currentImageIndex === index ? (
              <div>
                <Link
                  key={item.id}
                  to={`photo/${item.id}`}
                  state={currentImage}
                >
                  <ImageModal
                    key={item.id}
                    item={item}
                    index={index}
                    setCurrentImageIndex={setCurrentImageIndex}
                  />
                </Link>

                {/* <BsFillBookmarkPlusFill
                  size={40}
                  onClick={() => {
                    handleClick(item);
                  }}
                /> */}
              </div>
            ) : null;
          })}
          {!isLastPhoto && <Arrow direction={"right"} />}
        </Carousel>
        <Footer>
          <LikedBox>
            <Likes image={likedIcon} />
            {data?.[currentImageIndex]?.likes}
          </LikedBox>
          {isCurrentImageSaved ? (
            <SavedImg
              image={savedFavoriteIcon}
              onClick={() => onUnFav?.(currentImage)}
            />
          ) : (
            <SavedImg
              image={favoriteIcon}
              onClick={() => onFav(currentImage)}
            />
          )}
        </Footer>
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
            <Group position="center">
              <div onClick={open}>
                <p>this is an item</p>
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
