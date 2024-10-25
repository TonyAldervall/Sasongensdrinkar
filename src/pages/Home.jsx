import { RecipeSection } from '../components/RecipeSection';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <>
      <Navbar/>
      <div className='content-wrapper'>
        <RecipeSection />
      </div>
    </>
  );
}

export default Home;