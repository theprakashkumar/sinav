import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Result = () => {
    const { score } = useContext(DataContext)
    return(
        <div className="Result">
             <div>Your Final Score: {score}</div>
        </div>
    );
};

export default Result;
