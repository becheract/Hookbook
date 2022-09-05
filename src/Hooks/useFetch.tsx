import { useEffect, useState, useRef } from "react";

export const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchURL = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.quote);
        setState(json.quote);
        return state;
      } catch (err: any) {
        setError(err);
        return error;
      } finally {
        setLoading(false);
      }
    };

    fetchURL();
  }, [url]);

  return { state, error, loading };
};
