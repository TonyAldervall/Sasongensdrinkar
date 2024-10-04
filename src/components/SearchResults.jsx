import React from "react";

function SearchResults({ results }) {
  return (
    <div className="results">
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.name}</li> 
          ))}
        </ul>
      ) : (
        <p>Inga resultat var hittad</p>
      )}
    </div>
  );
}

export default SearchResults;