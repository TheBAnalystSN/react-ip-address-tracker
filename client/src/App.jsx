import SearchBar from "./components/SearchBar/SearchBar";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import MapView from "./components/MapView/MapView";
import useIPData from "./hooks/useIPData";

function App() {
  const { ipData, loading, error, fetchIPData } = useIPData();

  return (
    <>
      <header className="header">
        <h1>IP Address Tracker</h1>
        <SearchBar onSearch={fetchIPData} />
      </header>

      <section className="info-section">
        <InfoPanel data={ipData} loading={loading} error={error} />
      </section>

      <section className="map-section">
        <MapView data={ipData} />
      </section>
    </>
  );
}

export default App;
