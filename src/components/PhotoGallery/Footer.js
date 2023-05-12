import { useState } from "react";
import {
  Close,
  StyledArrow,
  Content,
  Header,
  SavedImg,
  Likes,
  LikedBox,
  AuthorInfo,
  StyledLink,
} from "./PhotoGallery.styles";

const Footer = ({
  data,
  currentImageIndex,
  isCurrentImageSaved,
  onFav,
  onUnFav,
}) => {
  const [liked, setLiked] = useState(isCurrentImageSaved);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      onUnFav?.();
    } else {
      setLiked(true);
      onFav?.();
    }
  };

  return (
    <footer>
      <div>
        <Likes image={likedIcon} />
        {data?.[currentImageIndex]?.likes}
      </div>
      <div onClick={handleClick}>
        {liked ? (
          <SavedImg image={savedFavoriteIcon} />
        ) : (
          <SavedImg image={favoriteIcon} />
        )}
      </div>
    </footer>
  );
};

export default Footer;
