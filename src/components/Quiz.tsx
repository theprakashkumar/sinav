import "./Quiz.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../contexts/DataContext";
import { Option } from "../data/quiz.types";

const Quiz = () => {
    const { quizName, questions } = useContext(DataContext);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [selectionId, setSelectionId] = useState("");

    const navigate = useNavigate();

    // ! Will Be Moved to Reducer
    const scoreKeeper = (curScore: number, option: Option): number => {
        return option.isRight ? curScore + 1 : curScore;
    };

    const handleClick = (selectedOption: Option, selectedId: string) => {
        setSelectionId(selectedId);
        setButtonDisabled(true);
        const evaluatedScore = scoreKeeper(score, selectedOption);
        setScore(evaluatedScore);
        setTimeout(() => {
            setQuestionNumber((questionNumber) => questionNumber + 1);
            setSelectionId("");
            setButtonDisabled(false);
        }, 2000);
    };

    return (
        <>
            {questionNumber < 2 ? (
                <div className="quiz-container">
                    {`Your Current Score: ${score}`}
                    <div className="quiz-container__question">
                        {questions[questionNumber].question}
                    </div>
                    <div className="quiz-container__button-container">
                        {questions[questionNumber].options.map((item) => (
                            <button
                                onClick={() => {
                                    handleClick(item, item.id);
                                }}
                                disabled={buttonDisabled}
                                className={`button ${
                                    buttonDisabled &&
                                    item.isRight &&
                                    "button--right"
                                } ${buttonDisabled && !item.isRight && selectionId === item.id && "button--wrong"}`}
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                navigate("/result")
            )}
        </>
    );
};

export default Quiz;
