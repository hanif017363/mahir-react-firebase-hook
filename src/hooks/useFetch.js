import { useEffect, useState } from "react";

export const useFetch = (initData, url) => {
  const [data, setData] = useState(initData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setData(null);
      });
  }, [url]);
  return { data, error, loading };
};
