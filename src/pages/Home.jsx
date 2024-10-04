import { WelcomeTitle } from '../components/WelcomeTitle';
import { RecipeSection } from '../components/RecipeSection';
import { AddRecipeButton } from '../components/AddRecipeButton';
import SearchBar from '../components/SearchBar';


function Home() {
  return (
    <>
      <SearchBar />
      <WelcomeTitle />
      <RecipeSection />
      <AddRecipeButton />
    </>
  );
}

export default Home;