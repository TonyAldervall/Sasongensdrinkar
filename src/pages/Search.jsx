import React from 'react';
import { useParams } from 'react-router-dom';
import DrinkResultSection from '../components/DrinkResultSection';
import Navbar from '../components/Navbar';


function Search() {
    const { searchTerm } = useParams();

    console.log(searchTerm);
    
  return (
    <>
      <Navbar/>
      <DrinkResultSection searchTerm={searchTerm} category={null}/>
    </>
  );
}

export default Search;