import React, { useState } from 'react';
import '../styles/Recipe.css';

const Glasses = ({count, setCount}) => {
    

    function increase(){
        count = Math.min(99, count + 1);
        setCount(count);
    }

    function decrease(){
        count = Math.max(1, count - 1);
        setCount(count);
    }

    return(
        <div className='glasses'>
            <button onClick={decrease}>-</button>
            <p>{count} Glas</p>
            <button onClick={increase}>+</button>
        </div>
    )

}

export default Glasses;