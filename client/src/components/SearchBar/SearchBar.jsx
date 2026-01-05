import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query.trim());
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="IP address or domain search"
      />
     <button type="submit" aria-label="Search">
  <img src="/src/assets/icon-arrow.svg" alt="" />
</button>

    </form>
  );
}

export default SearchBar;
