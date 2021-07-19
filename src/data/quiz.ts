import { Quiz } from "./quiz.types";
const quizSum: Quiz = {
    quizName: "SUM",
    questions: [
        {
            question: "2 + 2",
            options: [
                {
                    id: "a",
                    text: "2",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "4",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "1",
                    isRight: false,
                },
            ],
        },
        {
            question: "1 + 1",
            options: [
                {
                    id: "a",
                    text: "1",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "2",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "5",
                    isRight: false,
                },
            ],
        },
    ],
};

const quizProduct: Quiz = {
    quizName: "PRODUCT",
    questions: [
        {
            question: "2 * 2",
            options: [
                {
                    id: "a",
                    text: "22",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "4",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "4",
                    isRight: false,
                },
            ],
        },
        {
            question: "1 * 1",
            options: [
                {
                    id: "a",
                    text: "11",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "1",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "0",
                    isRight: false,
                },
            ],
        },
    ],
};

export { quizSum, quizProduct };
