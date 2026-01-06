import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import locationIcon from "../../assets/icon-location.svg";

const icon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

function Recenter({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng]);
  return null;
}

export default function MapView({ data }) {
  const lat = data?.latitude || 37.3861;
  const lng = data?.longitude || -122.0839;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} icon={icon} />
      <Recenter lat={lat} lng={lng} />
    </MapContainer>
  );
}
