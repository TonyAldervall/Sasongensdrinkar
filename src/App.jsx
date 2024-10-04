import { WelcomeTitle } from './WelcomeTitle';
import { RecipeSection } from './RecipeSection';
import { AddRecipeButton } from './AddRecipeButton';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <>
      <SearchBar />
      <WelcomeTitle />
      <RecipeSection />
      <AddRecipeButton />
    </>
  );
}

export default App;