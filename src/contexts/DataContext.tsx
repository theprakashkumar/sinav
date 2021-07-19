import { Quiz } from "../data/quiz.types";
import { createContext } from "react";
import { quizSum, quizProduct } from "../data/quiz";

export const DataContext = createContext<Quiz>({} as Quiz);

export const DataProvider = ({ children }: any) => {
    return (
        <DataContext.Provider value={quizSum}>{children}</DataContext.Provider>
    );
};
