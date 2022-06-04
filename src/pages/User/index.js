import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../../components/PhotoGallery";
import { useFetch } from "../../hooks/useFetch";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/users/${params?.username}/photos`);
  const { data: followers } = useFetch(`/users/${params?.username}/statistics`);
  return (
    <>
      <div>
        {data && (
          <img src={data?.[0]?.user?.profile_image.medium} alt={data.name} />
        )}
        <h1>{data?.[0]?.user?.name}</h1>
        <p> {data?.[0]?.user?.bio}</p>
        <a
          href="https://unsplash.com/username"
          target="_blank"
          rel="noreferrer"
        >
          {data?.[0]?.user?.username}
        </a>
        <div>
          <div>
            <h3>{data?.[0]?.user?.total_photos}</h3>
            <span>Photos</span>
          </div>
          <div>
            <h3>{data?.[0]?.user?.total_likes}</h3>
            <span>Likes</span>
          </div>
          <div>
            <h3>{followers?.downloads?.total}</h3>
            <span>Downloands</span>
          </div>
        </div>
        {data && <ImageGallery data={data} />}
      </div>
    </>
  );
};

export default User;
