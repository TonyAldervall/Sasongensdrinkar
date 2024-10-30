import Difficulty from './Difficulty';
import TimeIcon from './TimeIcon';
import IngredientsIcon from './IngredientsIcon';
import RatingSection from './Rating';
import { Link } from 'react-router-dom';
import '../styles/drink-card.css';

function DrinkCards( {data = []} ){
    if (data.length === 0) {
        return <p>No drinks available</p>;
    }

    else{
        return(
            <div className="drink-grid">
                {data.map((drink, index) => (
                    <Link to={`/recipe/${drink._id}`} className='drink-card' key={index}>
                        <div className='drink-image-container'>
                            <img src={drink.imageUrl} alt={`Picture for ${drink.title}`} />
                        </div>
                        <div className='drink-details-container'>
    
                            <h2 className='drink-title'>{drink.title}</h2>
    
    
                            <div className='drink-icon-info-div'>
                                <span><TimeIcon /> {drink.timeInMins} min</span>
                                <span><IngredientsIcon /> {drink.ingredients.length}</span>
                                <Difficulty
                                nrIngredients={drink.ingredients.length}
                                nrInstructions={drink.instructions.length}>
                                </Difficulty>
                            </div>
    
                            <div className='drink-rating-div'>
                                <RatingSection rating={drink.avgRating} readOnly={true} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

export default DrinkCards;