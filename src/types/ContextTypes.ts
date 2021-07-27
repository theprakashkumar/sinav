import { Option, Question, Quiz } from "./QuizTypes";

export type Data = {
    score: number;
    allQuiz: Quiz[];
    quiz: null | Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
    selectedAnswer: string[];
    dispatch: React.Dispatch<any>;
};

export type State = {
    score: number;
    allQuiz: Quiz[];
    quiz: null | Quiz;
    buttonDisabled: boolean;
    questionNumber: number;
    selectedAnswer: string[];
};

export type Action =
    | {
          type: "INI_QUIZ";
          payload: {
              quizId: number;
          };
      }
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
