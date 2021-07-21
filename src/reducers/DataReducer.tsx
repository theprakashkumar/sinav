import { State } from "../types/ContextTypes";
import { Action } from "../types/ContextTypes";

import scoreKeeper from "../utils/scoreKeeper";

const reducer = (initialState: State, action: Action) => {
    switch (action.type) {
        case "CHECK_ANSWER":
            const evaluatedScore = scoreKeeper(
                initialState.score,
                action.payload.selectedOption
            );
            return {
                ...initialState,
                buttonDisabled: true,
                score: evaluatedScore,
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
