import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const params = useParams();
  console.log("params", params?.searchTerm);
  const { data, isLoading, isError } = useFetch(`/search/photos/?count=20`, {
    query: params?.searchTerm,
  });

  return (
    <div>
      {data?.results.map((e) => (
        <a href={e.links.download} key={e.id} target="_blank" rel="noreferrer">
          <img src={e.urls.small} alt={e.alt_description} />
        </a>
      ))}
      {/*   <h1>data</h1> */}
    </div>
  );
};

export default Search;
