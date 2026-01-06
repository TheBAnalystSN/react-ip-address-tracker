import { useState } from "react";
import arrowIcon from "../../assets/icon-arrow.svg";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
    setValue("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <img src={arrowIcon} alt="Search" />
      </button>
    </form>
  );
}
