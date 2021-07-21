import { Option, Question, Quiz } from "./QuizTypes";

export type Data = {
    score: number;
    quiz: Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
    dispatch: React.Dispatch<any>;
};

export type State = {
    score: number;
    quiz: Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
};

export type Action =
    | {
          type: "CHECK_ANSWER";
          payload: {
              question: Question;
              selectedOption: Option;
          };
      }
    | {
          type: "ENABLE_BUTTON";
      }
    | {
          type: "NEXT_QUESTION";
      };
