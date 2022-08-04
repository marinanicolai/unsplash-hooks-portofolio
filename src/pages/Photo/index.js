import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ImageContainer,
  Image,
  AuthorName,
} from "../../components/ImageItem/ImageItem.styles";

const Photo = () => {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // if no location state/ data redirect to homepage
    if (!location.state) {
      return navigate("/");
    }
  }, [location.state, navigate]);

  console.log(location.state);
  console.log(location.state.user.first_name);
  console.log(location.state.user.profile_image.medium);
  console.log(location.state.urls.regular);
  console.log("likes", location.state.likes);
  console.log("views", location.state.views);

  if (!location.state) {
    return null;
  }

  return (
    <div>
      <ImageContainer>
        <Image
          src={location.state.user.profile_image.medium}
          alt="name of the author"
        />
        <AuthorName>{location.state.user.first_name}</AuthorName>
      </ImageContainer>
      <Image src={location.state.urls.small} />
    </div>
  );
};

export default Photo;
