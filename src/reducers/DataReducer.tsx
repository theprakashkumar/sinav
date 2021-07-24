import { act } from "react-dom/test-utils";
import { State } from "../types/ContextTypes";
import { Action } from "../types/ContextTypes";

import scoreKeeper from "../utils/scoreKeeper";

const reducer = (initialState: State, action: Action) => {
    switch (action.type) {
        case "CHECK_ANSWER":
            console.log("Check Answer Ran!");
            const evaluatedScore = scoreKeeper(
                initialState.score,
                action.payload.selectedOption
            );
            const updatedSelectedOption = initialState.selectedAnswer.push(
                action.payload.selectedId
            );
            console.log(initialState.selectedAnswer, action.payload.selectedId);
            return {
                ...initialState,
                buttonDisabled: true,
                score: evaluatedScore,
                selectedOption: updatedSelectedOption,
            };
        case "ENABLE_BUTTON":
            return {
                ...initialState,
                buttonDisabled: false,
            };
        case "NEXT_QUESTION":
            return {
                ...initialState,
                questionNumber: initialState.questionNumber + 1,
            };
    }
};

export default reducer;
