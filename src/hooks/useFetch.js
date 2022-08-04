import { useEffect, useState } from "react";
import axios from "axios";

export const baseURL = "https://api.unsplash.com/";
// const clientId = "EIJYDhLqG-eNEO9LlQmkRD776UF4ekwJsFPe217uYiE";

export const axiosClient = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
  },
});

export const useFetch = (url, params) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetch = async () => {
    try {
      const { data } = await axiosClient.get(url, {
        params: params,
      });

      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, data, error };
};
