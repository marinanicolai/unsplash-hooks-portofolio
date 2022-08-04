import React, { useState } from "react";
import ImageGallery from "../../components/PhotoGallery";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const [query] = useState(null);
  const url = query ? `/search/photos` : "/photos/random";
  const { data, isLoading, isError } = useFetch(`${url}/?count=2`, query);
  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {data && <ImageGallery data={data} />}
    </div>
  );
};

export default Home;
