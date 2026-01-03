import { useEffect, useState } from "react";

const BASE_URL = "https://ipapi.co";

function useIPData() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIPData = async (query = "") => {
    setLoading(true);
    setError(null);

    try {
      const url = query
        ? `${BASE_URL}/${query}/json/`
        : `${BASE_URL}/json/`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.reason || "Unable to fetch IP data");
      }

      setIpData(data);
    } catch (err) {
      setError(err.message);
      setIpData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPData();
  }, []);

  return {
    ipData,
    loading,
    error,
    fetchIPData
  };
}

export default useIPData;
