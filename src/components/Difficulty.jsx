import DifficultyHighIcon from "./DifficultyHighIcon";
import DifficultyLowIcon from "./DifficultyLowIcon";
import DifficultyMediumIcon from "./DifficultyMediumIcon";

function Difficulty({ nrInstructions, nrIngredients}){
    let difficulty = "";
    let score = nrInstructions + nrIngredients;
    let icon = "";

    if(score <= 7){
        difficulty = "Enkel";
        icon = <DifficultyLowIcon />
    }
    else if(score <= 9){
        difficulty = "Medel";
        icon = <DifficultyMediumIcon />
    }
    else if(score >= 10){
        difficulty = "Svår";
        icon = <DifficultyHighIcon />
    }

    return(
        <>
            <span>{icon} {difficulty}</span>
        </>
    );
}

export default Difficulty;