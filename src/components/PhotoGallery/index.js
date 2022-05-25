import React, { useContext, useState } from "react";
import Modal from "reactjs-popup";
import ImageItem from "../ImageItem";
import "reactjs-popup/dist/index.css";
import { StorageContext } from "../../providers";
import { ModalFooter } from "../Modal/ModalFooter/index";
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
  Arrow,
  Content,
  Header,
  SavedImg,
  Likes,
  Profile,
} from "./PhotoGallery.styles";

import "../../App.css";

const ImageGallery = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const currentImage = data?.[currentImageIndex];
  const { favorites, onFav, onUnFav } = useContext(StorageContext);
  const arrayLength = data?.length;
  const isFirstPhoto = data[0]?.id === currentImage?.id;
  const isLastPhoto = data[arrayLength - 1]?.id === currentImage?.id;

  function toggleModal() {
    setCurrentImageIndex(null);
  }

  const isCurrentImageSaved =
    favorites && favorites?.find((image) => image?.id === currentImage?.id);

  const LeftArrow = () => (
    <Arrow
      image={leftArrow}
      onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
    />
  );

  const RightArrow = () => (
    <Arrow
      image={rightArrow}
      onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
    />
  );

  return (
    <div className="box">
      <Modal
        closeOnDocumentClick
        open={currentImageIndex !== null}
        onClose={toggleModal}
      >
        <Header>
          <div>
            <a href="#">
              <img
                className="profile"
                src={data?.[currentImageIndex]?.user?.profile_image["small"]}
                alt="profile"
              />
              <div> {data?.[currentImageIndex]?.user?.name}</div>
            </a>
          </div>
          <Close image={closeIcon} onClick={toggleModal} />
        </Header>
        <Content>
          {!isFirstPhoto ? <LeftArrow /> : null}
          {data?.map((item, index) => {
            return currentImageIndex === index ? (
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            ) : null;
          })}
          {!isLastPhoto ? <RightArrow /> : null}
        </Content>
        <div>
          <div>
            <Likes image={likedIcon} />
            {data?.[currentImageIndex]?.likes}
          </div>
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
        </div>
      </Modal>

      {data?.map((item, index) => {
        return (
          <ImageItem
            key={item.id}
            item={item}
            index={index}
            likes={item.likes}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;
