import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import {
  Container,
  ImageContainer,
  Image,
  AuthorContainer,
  AuthorImage,
  AuthorName,
  StatsContainer,
  Stat,
  DownloadButton,
  Description,
} from "./Photo.styles";
import Item from "../../components/ImageItem";

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

  if (!location.state || !location.state.user) {
    return null;
  }

  const { links, alt_description, user, urls, likes, views } = location.state;
  console.log(user);
  const handleDownload = () => {
    // Implement the download logic here
    // For example, you can use the 'download' attribute to initiate the download of the image
    const link = document.createElement("a");
    link.href = location.state.urls.regular;
    window.open(link.href);
  };
  
  
  
  return (
    <Container>
      <AuthorContainer>
        <AuthorImage src={user.profile_image.medium} alt={user.name} />
        <Link key={user} to ={`../users/${user.name}`} state={user}><AuthorName>{user.name}</AuthorName></Link>
      </AuthorContainer>
      <ImageContainer>
        <Image src={urls.regular} alt="Photo" />
<DownloadButton onClick={handleDownload}>Download</DownloadButton>

      </ImageContainer>
      <Description>{alt_description}</Description>

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
