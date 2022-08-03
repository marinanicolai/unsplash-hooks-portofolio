import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../../components/PhotoGallery";
import { useFetch } from "../../hooks/useFetch";
import {
  AuthorName,
  AuthorInfo,
  Intro,
  Link,
  Info,
  Photos,
  Likes,
  AuthorPortofolio,
} from "./User.styles";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/users/${params?.username}/photos`);
  const { data: statistics } = useFetch(
    `/users/${params?.username}/statistics`
  );
  return (
    <>
      <div>
        <AuthorInfo>
          {data && (
            <img src={data?.[0]?.user?.profile_image.medium} alt={data.name} />
          )}
          <AuthorName>{data?.[0]?.user?.name}</AuthorName>
          <Intro> {data?.[0]?.user?.bio}</Intro>
          <Link
            href="https://unsplash.com/username"
            target="_blank"
            rel="noreferrer"
          >
            {data?.[0]?.user?.username}
          </Link>
          <Info>
            <Photos>
              <h3>{data?.[0]?.user?.total_photos}</h3>
              <span>Photos</span>
            </Photos>
            <Likes>
              <h3>{data?.[0]?.user?.total_likes}</h3>
              <span>Likes</span>
            </Likes>
            <div>
              <h3>{statistics?.downloads?.total}</h3>
              <span>Downloands</span>
            </div>
          </Info>
        </AuthorInfo>
        <AuthorPortofolio>
          {data && <ImageGallery data={data} />}
        </AuthorPortofolio>
      </div>
    </>
  );
};

export default User;
