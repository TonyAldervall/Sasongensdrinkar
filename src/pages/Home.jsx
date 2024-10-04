import { WelcomeTitle } from '../components/WelcomeTitle';
import { RecipeSection } from '../components/RecipeSection';
import { AddRecipeButton } from '../components/AddRecipeButton';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <>
      <Navbar/>
      <SearchBar />
      <WelcomeTitle />
      <RecipeSection />
      <AddRecipeButton />
    </>
  );
}

export default Home;