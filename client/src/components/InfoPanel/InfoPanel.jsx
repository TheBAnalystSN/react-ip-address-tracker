function InfoPanel({ data, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <div>
        <h4>IP Address</h4>
        <p>{data.ip}</p>
      </div>

      <div>
        <h4>Location</h4>
        <p>
          {data.city}, {data.region} {data.postal}
        </p>
      </div>

      <div>
        <h4>Timezone</h4>
        <p>UTC {data.utc_offset}</p>
      </div>

      <div>
        <h4>ISP</h4>
        <p>{data.org}</p>
      </div>
    </div>
  );
}

export default InfoPanel;
