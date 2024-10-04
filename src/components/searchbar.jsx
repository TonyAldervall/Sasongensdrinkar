import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchResults from "./SearchResults.jsx";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        const response = await fetch(
          `https://recept5-kivel.reky.se/api/recipes?search=${searchTerm}`
        );
        const data = await response.json();
        setResults(data); 
      };
      fetchData();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="search-container">
      <h1>Sök recept</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Sök recept"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <SearchResults results={results} />
    </div>
  );
}

export default SearchBar;