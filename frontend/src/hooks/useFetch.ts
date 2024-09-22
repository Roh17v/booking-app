import { useEffect, useState } from "react";

const useFetch = <T = any>(url: string, option: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  console.log(url);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(url, option);
        const result: T = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, option);
      const result = await response.json();
      setData(result);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
