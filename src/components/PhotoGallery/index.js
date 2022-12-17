import React, { useContext, useState } from "react";
import Modal from "reactjs-popup";
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
  console.log("State" + collection);
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
    const image = direction === "left" ? leftArrow : rightArrow;
    return <StyledArrow image={image} onClick={clickHandler} />;
  };
  return (
    <div>
      <Modal
        closeOnDocumentClick
        open={currentImageIndex !== null}
        onClose={toggleModal}
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
          <Close image={closeIcon} onClick={toggleModal} />
        </Header>
        <Content>
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

                <BsFillBookmarkPlusFill
                  size={40}
                  onClick={() => {
                    handleClick(item);
                  }}
                />
              </div>
            ) : null;
          })}
          {!isLastPhoto && <Arrow direction={"right"} />}
        </Content>
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
      <div className="row">
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
    </div>
  );
};

export default ImageGallery;
