export default function InfoPanel({ data, loading, error }) {
  if (loading) return <div className="info-card">Loading...</div>;
  if (error) return <div className="info-card">{error}</div>;
  if (!data) return null;

  return (
    <div className="info-card">
      <div>
        <h4>IP ADDRESS</h4>
        <p>{data.ip}</p>
      </div>
      <div>
        <h4>LOCATION</h4>
        <p>
          {data.city}, {data.region} {data.postal}
        </p>
      </div>
      <div>
        <h4>TIMEZONE</h4>
        <p>UTC {data.utc_offset}</p>
      </div>
      <div>
        <h4>ISP</h4>
        <p>{data.org}</p>
      </div>
    </div>
  );
}
