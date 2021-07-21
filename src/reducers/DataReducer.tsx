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
            console.log("Evaluated Score", evaluatedScore);
            return {
                ...initialState,
                score: initialState.score + evaluatedScore,
            };
    }
};

export default reducer;
