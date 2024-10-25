import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';


export function RecipeSection() {

  return (
      <>
        <div className='content-wrapper'>
          <CategorySection category={"Höst"}></CategorySection>
          <CategorySection category={"Vår"}></CategorySection>
          <CategorySection category={"Sommar"}></CategorySection>
          <CategorySection category={"Vinter"}></CategorySection>
        </div>
      </>
  );
}