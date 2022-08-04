import React from "react";
import ImageGallery from "../../components/PhotoGallery";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const params = useParams();
  const { data } = useFetch(`/search/photos/?count=2`, {
    query: params?.searchTerm,
  });

  return <div>{data && <ImageGallery data={data.results} />}</div>;
};

export default Search;
