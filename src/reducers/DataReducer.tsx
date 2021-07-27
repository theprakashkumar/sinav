import { quizProduct, quizSum } from "../data/quiz";
import { State } from "../types/ContextTypes";
import { Action } from "../types/ContextTypes";

import scoreKeeper from "../utils/scoreKeeper";

const reducer = (initialState: State, action: Action) => {
    switch (action.type) {
        case "INI_QUIZ":
            if (action.payload.quizId === 1) {
                return {
                    ...initialState,
                    quiz: quizSum,
                };
            }
            return {
                ...initialState,
                quiz: quizProduct,
            };
        case "CHECK_ANSWER":
            const evaluatedScore = scoreKeeper(
                initialState.score,
                action.payload.selectedOption
            );

            return {
                ...initialState,
                buttonDisabled: true,
                score: evaluatedScore,
                selectedAnswer: [
                    ...initialState.selectedAnswer,
                    action.payload.selectedId,
                ],
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
