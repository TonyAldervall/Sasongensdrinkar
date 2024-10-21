import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../styles/Recipe.css';

const RatingSection = () => {
    const [ratings, setRatings] = useState(null);
    const { recipeId } = useParams();
    const [rated, setRated] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        const ratingStatus = sessionStorage.getItem(`rated_${recipeId}`);
        if (ratingStatus){
            setRated(true);
        }

        async function fetchInstructions(){
            const response = await fetchData(`https://recept5-kivel.reky.se/recipes/${recipeId}`);
            
            if (response && response.avgRating) {
                setRatings(response.avgRating);
            }  
             
        }

    if (recipeId) {
        fetchInstructions();
    }
    }, [recipeId]); 

        const saveRating = async (newRating) => {
            if(!rated){
            setRatings(newRating); 
        
            try {
                const response = await fetch(`https://recept5-kivel.reky.se/recipes/${recipeId}/ratings`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ rating: newRating }), 
                });

                if(response.ok){
        
                const result = response.headers.get('content-length') > 0 ? await response.json() : null;
                    setRated(true);
                    sessionStorage.setItem(`rated_${recipeId}`, 'true');
                    setMessage(`Tack för ditt bidrag!`);
                    console.log("Rating successfully saved", result); 
                } else {
                    console.error("Failed to save rating:", response.status);
                }
            } catch (error) {
                console.error("Error saving rating:", error);
            } 
            } else{
                return;
            }
        };

    return(
        <div className='rating'>
        <Box sx={{'& > legend': {mt:2}}}>
            <Rating 
            name="simple-controlled"
            value={ratings}
            readOnly={rated}
            onChange={(event, newRating) => {
                if(!rated){
                saveRating(newRating);
                <Typography component="legend">Tack för ditt bidrag!</Typography>
                }
            }}
            />
        </Box>
        {rated && message && (
            <div className='message'>{message}</div>
        )}
        </div>
    )
}

export default RatingSection;