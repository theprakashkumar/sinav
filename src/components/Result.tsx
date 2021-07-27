import "./Result.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Result = () => {
    const { score, quiz, selectedAnswer } = useContext(DataContext);
    console.log(selectedAnswer);
    return (
        <div className="Result">
            <div>Your Final Score: {score}</div>
            {quiz?.questions.map((question, index) => (
                <>
                    <p>{question.question}</p>
                    {question.options.map((option) => (
                        <div
                            className={`op ${option.isRight && "right"}  ${
                                selectedAnswer[index] == option.id && !option.isRight && "wrong"
                            }`}
                        >
                            {` ${index}. ${option.text}`}
                        </div>
                    ))}
                </>
            ))}
            {selectedAnswer.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default Result;
