import { useEffect, useState } from "react";

export default function useIPData() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIPData = async (query = "") => {
    try {
      setLoading(true);
      setError(null);

      const url = query
        ? `https://ipapi.co/${query}/json/`
        : `https://ipapi.co/json/`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        throw new Error();
      }

      setIpData(data);
    } catch {
      setError("Invalid IP address or domain");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPData();
  }, []);

  return { ipData, loading, error, fetchIPData };
}
