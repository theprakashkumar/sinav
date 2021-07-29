import "./Result.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Result = () => {
    const { score, quiz, selectedAnswer } = useContext(DataContext);
    console.log(selectedAnswer);
    return (
        <div className="result-container">
            <div className="result-container__result">Result</div>
            <div className="result-container__score">
                Your Final Score: {score}
            </div>
            {quiz?.questions.map((question, index) => (
                <>
                    <div className="result-container__question">
                        {question.question}
                    </div>
                    <div className="result-container__option-container">
                        {question.options.map((option) => (
                            <div
                                className={`result-container__option ${
                                    option.isRight &&
                                    "result-container__option--right"
                                }  ${
                                    selectedAnswer[index] === option.id &&
                                    !option.isRight &&
                                    "result-container__option--wrong"
                                }`}
                            >
                                {option.text}
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Result;
