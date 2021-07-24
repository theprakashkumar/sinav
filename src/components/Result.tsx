import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Result = () => {
    const { score, selectedAnswer } = useContext(DataContext)
    console.log(selectedAnswer)
    return(
        <div className="Result">
             <div>Your Final Score: {score}</div>
             {selectedAnswer.map((item, index)=> <p key={index}>{item}</p>)}
        </div>
    );
};

export default Result;
