import React from 'react';
import { useParams } from 'react-router-dom';
import DrinkResultSection from '../components/DrinkResultSection';
import Navbar from '../components/Navbar';


function Category() {
    const { categoryId } = useParams();

  return (
    <>
      <Navbar/>
      <DrinkResultSection category={categoryId}/>
    </>
  );
}

export default Category;