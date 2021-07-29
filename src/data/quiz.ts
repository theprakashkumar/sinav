import { Quiz } from "../types/QuizTypes";
const quizSum: Quiz = {
    quizName: "SUM",
    questions: [
        {
            question: "About how many espresso beans are required to make one espresso?",
            options: [
                {
                    id: "a",
                    text: "22",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "42",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "60",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "80",
                    isRight: false,
                },
            ],
        },
        {
            question: "How long does it take for a coffee tree to reach maturity?",
            options: [
                {
                    id: "a",
                    text: "8 Years",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "2 Years",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "5 Years",
                    isRight: true,
                },
                {
                    id: "d",
                    text: "3 Years",
                    isRight: false,
                },
            ],
        },
        {
            question: "About what percentage of all coffee consumed is instant coffee?",
            options: [
                {
                    id: "a",
                    text: "One Half",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "One Third",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "One Fifth",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "One Tenth",
                    isRight: true,
                },
            ],
        },
        {
            question: "What percentage of coffee drinkers prefer their coffee black?",
            options: [
                {
                    id: "a",
                    text: "30%",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "40%",
                    isRight: true,
                },
                {
                    id: "c",
                    text: "50%",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "60%",
                    isRight: false,
                },
            ],
        },
        {
            question: "What day is celebrated as International Coffee Day?",
            options: [
                {
                    id: "a",
                    text: "January 10",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "June 15",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "October 1",
                    isRight: true,
                },
                {
                    id: "d",
                    text: "December 23",
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
