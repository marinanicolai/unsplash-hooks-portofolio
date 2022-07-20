import React from "react";
import { useLocation } from "react-router-dom";
import {
  ImageContainer,
  Image,
  AuthorName,
} from "../../components/ImageItem/ImageItem.styles";

const Photo = () => {
  let location = useLocation();

  console.log(location.state);
  console.log(location.state.user.first_name);
  console.log(location.state.user.profile_image.medium);
  console.log(location.state.urls.regular);
  console.log("likes", location.state.likes);
  console.log("views", location.state.views);
  return (
    <div>
      <ImageContainer>
        <Image
          src={location.state.user.profile_image.medium}
          alt="name of the author"
        />
        <AuthorName>{location.state.user.first_name}</AuthorName>
      </ImageContainer>
      <p>
        if location state undefined => use useNavigate , navigate on front page{" "}
      </p>
    </div>
  );
};

export default Photo;
