import React from "react";

function SearchResults({ results, searchTerm }) {
  return (
    <div className="results">
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index} className="results-item">
              {result.name}
            </li>
          ))}
        </ul>
      ) : (

        searchTerm && <p className="no-results">Inga resultat var hittad</p>
      )}
    </div>
  );
}

export default SearchResults;