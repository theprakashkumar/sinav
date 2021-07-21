import { Option, Question, Quiz } from "./QuizTypes";

export type Data = {
    score: number;
    quiz: Quiz;
    dispatch: React.Dispatch<any>;
};

export type State = {
    score: number;
    quiz: Quiz;
};

export type Action = {
    type: "CHECK_ANSWER";
    payload: {
        question: Question;
        selectedOption: Option;
    };
};
