import { useEffect, useState } from "react";
import { BASE_URL } from "../url/Url";

function useGetApi() {
  //  states
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error("Xatolik: " + res.status);
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
}

export default useGetApi;
