// src/App.js
import React, { useState } from "react";

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;

  return function (args) {
    clearTimeout(timeoutId);
    console.log(this);
    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
};

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = debounce((value) => {
    console.log("Fetching results for:", value);
    setSearchTerm(value);
  }, 500);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Debounce Example</h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          value={searchTerm}
        />
        <p className="text-lg">Search Term: {searchTerm}</p>
      </div>
    </div>
  );
};

export default Debouncing;
