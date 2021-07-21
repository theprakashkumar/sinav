import { Data } from "../types/ContextTypes";
import { createContext } from "react";
import { quizSum, quizProduct } from "../data/quiz";
import reducer from "../reducers/DataReducer";
import { useReducer } from "react";

export const DataContext = createContext<Data>({} as Data);

const initialState = {
    score: 0,
    quiz: quizSum
}

export const DataProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log({...state})
    return (
        <DataContext.Provider value={{...state, dispatch}}>
            {children}
        </DataContext.Provider>
    );
};

// Data that need to sent from here:
// Score
// history of selected option
//

// Reducer
// update score
// store selected option
//
