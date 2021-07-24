import "./Quiz.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../contexts/DataContext";
import { Option } from "../types/QuizTypes";

const Quiz = () => {
    const { score, quiz, buttonDisabled, questionNumber, dispatch } =
        useContext(DataContext);
    const [selectionId, setSelectionId] = useState("");

    const navigate = useNavigate();

    const handleClick = (selectedOption: Option, selectedItem: string) => {
        setSelectionId(selectedItem);
        console.log({ selectedItem });
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                selectedOption,
                selectedId: selectedItem,
            },
        });
        setTimeout(() => {
            dispatch({
                type: "NEXT_QUESTION",
            });
            setSelectionId("");
            dispatch({
                type: "ENABLE_BUTTON",
            });
        }, 2000);
    };

    return (
        <>
            {questionNumber < 2 ? (
                <div className="quiz-container">
                    {`Your Current Score: ${score}`}
                    <div className="quiz-container__question">
                        {quiz.questions[questionNumber].question}
                    </div>
                    <div className="quiz-container__button-container">
                        {quiz.questions[questionNumber].options.map((item) => (
                            <button
                                onClick={() => {
                                    handleClick(item, item.id);
                                }}
                                disabled={buttonDisabled}
                                className={`button ${
                                    buttonDisabled &&
                                    item.isRight &&
                                    "button--right"
                                } ${
                                    buttonDisabled &&
                                    !item.isRight &&
                                    selectionId === item.id &&
                                    "button--wrong"
                                }`}
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
