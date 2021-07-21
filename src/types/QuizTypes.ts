export type Option = {
    id: string;
    text: string;
    isRight: boolean;
};

export type Question = {
    question: string;
    options: Option[];
};

export type Quiz = {
    quizName: string;
    questions: Question[];
};
