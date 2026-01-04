import { useState } from "react";

function useIPData() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIPData = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://ipapi.co/${query}/json/`);
      const data = await response.json();

      setIpData(data);
    } catch (err) {
      setError("Unable to fetch IP data");
    } finally {
      setLoading(false);
    }
  };

  return { ipData, loading, error, fetchIPData };
}

export default useIPData;
