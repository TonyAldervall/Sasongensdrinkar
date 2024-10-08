import { WelcomeTitle } from '../components/WelcomeTitle';
import { RecipeSection } from '../components/RecipeSection';
import { AddRecipeButton } from '../components/AddRecipeButton';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <>
      <Navbar/>
      <WelcomeTitle />
      <RecipeSection />
      <AddRecipeButton />
    </>
  );
}

export default Home;