import * as React from "react";
import { camelizeKeys } from "humps";

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${process.env.REACT_APP_API_BASE_URL}/${endpoint}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_KEY || ""}`,
          },
        }
      );
      const data = await response.json();
      setData(camelizeKeys(Object.values(data)[0]) as T[]);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { refetch: fetchData, data, error, loading };
};

export default useFetch;
