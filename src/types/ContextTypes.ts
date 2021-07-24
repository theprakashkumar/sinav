import { Option, Question, Quiz } from "./QuizTypes";

export type Data = {
    score: number;
    quiz: Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
    selectedAnswer: string[];
    dispatch: React.Dispatch<any>;
};

export type State = {
    score: number;
    quiz: Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
    selectedAnswer: string[];
};

export type Action =
    | {
          type: "CHECK_ANSWER";
          payload: {
              question: Question;
              selectedOption: Option;
              selectedId: string;
          };
      }
    | {
          type: "ENABLE_BUTTON";
      }
    | {
          type: "NEXT_QUESTION";
      };
