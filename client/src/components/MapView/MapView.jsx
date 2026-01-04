import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ data }) {
  if (!data || !data.latitude || !data.longitude) {
    return <p>Map will render here</p>;
  }

  const position = [data.latitude, data.longitude];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {data.city}, {data.region}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
