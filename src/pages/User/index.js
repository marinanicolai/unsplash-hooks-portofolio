import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../../components/PhotoGallery";
import { useFetch } from "../../hooks/useFetch";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/users/${params?.username}/photos`);
  console.log("data", data);
  console.log(data?.[0]?.user?.portofolio_url);
  return (
    <>
      <div>
        {data && (
          <img src={data?.[0]?.user?.profile_image.medium} alt={data.name} />
        )}
        <h1>{data?.[0]?.user?.name}</h1>

        <a href="{data?.[0]?.user?.portfolio_url}">
          {data?.[0]?.user?.portfolio_url}
        </a>
        <p> {data?.[0]?.user?.bio}</p>
        <div>
          <div>
            <h3>{data?.[0]?.user?.total_photos}</h3>
            <span>Photos</span>
          </div>
          <div>
            <h3>{data?.[0]?.user?.links?.followers}</h3>
            <span>Followers</span>
          </div>
          <div>
            <h3>{data?.[0]?.user?.links?.following}</h3>
            <span>Following</span>
          </div>
        </div>
        {data && <ImageGallery data={data} />}
      </div>
    </>
  );
};

export default User;
