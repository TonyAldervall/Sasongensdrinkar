function Difficulty({ nrInstructions, nrIngredients}){
    let difficulty = "";
    let score = nrInstructions + nrIngredients;
    if(score <= 7){
        difficulty = "Enkel";
    }
    else if(score <= 9){
        difficulty = "Medel";
    }
    else if(score >= 10){
        difficulty = "Svår";
    }

    return(
        <>
            <span><strong>Icon3</strong> {difficulty}</span>
        </>
    );
}

export default Difficulty;