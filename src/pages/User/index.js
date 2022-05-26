import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../../components/PhotoGallery";
import { useFetch } from "../../hooks/useFetch";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/users/${params?.username}/photos`);
  console.log("data", data);
  return (
    <>
      <div>{data && <ImageGallery data={data} />}</div>
    </>
  );
};

export default User;
