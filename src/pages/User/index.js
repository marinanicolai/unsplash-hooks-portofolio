import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const User = () => {
  const params = useParams();
  const { data } = useFetch(`/user/username`, {
    query: params?.user,
  });
  console.log(data);
  return (
    <>
      <div>this is a User page</div>
    </>
  );
};

export default User;
