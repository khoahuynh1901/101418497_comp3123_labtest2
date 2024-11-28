import React, { useState } from "react";
import "../Styles/App.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter Location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
