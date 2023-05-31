import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, AuthorName } from "../../components/ImageItem/ImageItem.styles";

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

  const { user, urls, likes, views } = location.state;

  console.log(user);
  console.log(user.first_name);
  console.log(user.profile_image.medium);
  console.log(urls.regular);
  console.log("likes", likes);
  console.log("views", views);

  return (
    <div>
      <div>
        <Image
          src={user.profile_image.medium}
          alt="name of the author"
        />
        <AuthorName>{user.first_name}</AuthorName>
      </div>
      <Image src={urls.small} />
    </div>
  );
};

export default Photo;
