import { Data } from "../types/ContextTypes";
import { createContext } from "react";
import { quizCoffee, quizTea } from "../data/quiz";
import reducer from "../reducers/DataReducer";
import { useReducer } from "react";

export const DataContext = createContext<Data>({} as Data);

const initialState = {
    score: 0,
    allQuiz: [quizCoffee, quizTea],
    quiz: null,
    buttonDisabled: false,
    questionNumber: 0,
    selectedAnswer: [],
};

export const DataProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
