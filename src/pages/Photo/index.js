import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ImageContainer,
  Image,
  AuthorContainer,
  AuthorImage,
  AuthorName,
  StatsContainer,
  Stat,
} from "./Photo.styles";

const Photo = () => {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // if no location state/ data redirect to homepage
    if (!location.state) {
      return navigate("/");
    }
  }, [location.state, navigate]);

  if (!location.state || !location.state.user) {
    return null;
  }

  const { user, urls, likes, views } = location.state;

  return (
    <Container>
      <AuthorContainer>
        <AuthorImage src={user.profile_image.medium} alt={user.name} />
        <AuthorName>{user.name}</AuthorName>
      </AuthorContainer>
      <ImageContainer>
        <Image src={urls.regular} alt="Photo" />
      </ImageContainer>
      <StatsContainer>
        <Stat>
          <span>{likes}</span> Likes
        </Stat>
        <Stat>
          <span>{views}</span> Views
        </Stat>
      </StatsContainer>
    </Container>
  );
};

export default Photo;
