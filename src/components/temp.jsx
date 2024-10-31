import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import CrossIcon from "./CrossIcon";
import '../styles/searchbar.css';

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if(event.key === "Enter" && searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSearchTerm("");
    }
  };

  return (
    <form method="get" className="search-form">
      {isOpen && (
        <input
          type="search"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          placeholder="Sök recept..."
          className="search-input"
        />
      )}
      
      <button
        type="button"
        aria-label={isOpen ? "Stäng sök" : "Sök"}
        className={isOpen ? "search-button search-button-open" : "search-button"}
        onClick={handleToggle}
      >
        {isOpen ? <CrossIcon /> : <SearchIcon />}
      </button>
    </form>
  );
}

export default SearchBar;