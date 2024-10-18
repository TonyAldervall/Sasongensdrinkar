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
            <p><strong>Icon2</strong> {difficulty}</p>
        </>
    );
}

export default Difficulty;