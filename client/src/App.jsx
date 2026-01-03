import SearchBar from "./components/SearchBar/SearchBar";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import MapView from "./components/MapView/MapView";
import useIPData from "./hooks/useIPData";

function App() {
  const { ipData, loading, error, fetchIPData } = useIPData();

  return (
    <div>
      <SearchBar onSearch={fetchIPData} />
      <InfoPanel data={ipData} loading={loading} error={error} />
      <MapView data={ipData} />
    </div>
  );
}

export default App;
