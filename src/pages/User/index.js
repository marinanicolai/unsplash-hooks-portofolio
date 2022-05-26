import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/users/${params?.username}/photos`);
  console.log("data", data);
  return (
    <>
      <div>this is a User page</div>
    </>
  );
};

export default User;
