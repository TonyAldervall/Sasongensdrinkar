import { RecipeSection } from './Recipesection';

function App() {
  
  
  const handlePostData = async () => {
    const result = await postRecipe(newRecipe);
    setData([...data, result]);
  };

  return (
    <>
      <h1>Välkommen</h1>
      <h2>Bästa receptsidan.</h2>
      <RecipeSection></RecipeSection>
      <button onClick={handlePostData}>Add New Recipe</button>
    </>
  );
}



export default App;