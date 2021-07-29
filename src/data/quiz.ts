import { Quiz } from "../types/QuizTypes";
const quizCoffee: Quiz = {
    quizName: "Coffee",
    questions: [
        {
            question:
                "About how many espresso beans are required to make one espresso?",
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
            question:
                "How long does it take for a coffee tree to reach maturity?",
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
            question:
                "About what percentage of all coffee consumed is instant coffee?",
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
            question:
                "What percentage of coffee drinkers prefer their coffee black?",
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

const quizTea: Quiz = {
    quizName: "Tea",
    questions: [
        {
            question: "Where do people drink tea most?",
            options: [
                {
                    id: "a",
                    text: "China",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "India",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "Russia",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "Turkey",
                    isRight: true,
                },
            ],
        },
        {
            question: "When was the tea bag invented?",
            options: [
                {
                    id: "a",
                    text: "1956",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "1891",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "1904",
                    isRight: true,
                },
                {
                    id: "d",
                    text: "2001",
                    isRight: false,
                },
            ],
        },
        {
            question:
                "How much does 1 kg of the world's most expensive tea cost?",
            options: [
                {
                    id: "a",
                    text: "$200 000",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "$500 000",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "$1 000 000",
                    isRight: true,
                },
                {
                    id: "d",
                    text: "$3 000 000",
                    isRight: false,
                },
            ],
        },
        {
            question: "What tea is the most widespread in the world?",
            options: [
                {
                    id: "a",
                    text: "Black",
                    isRight: true,
                },
                {
                    id: "b",
                    text: "White",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "Oolong",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "Green",
                    isRight: false,
                },
            ],
        },
        {
            question: "What day is celebrated as International Tea Day?",
            options: [
                {
                    id: "a",
                    text: "February 13",
                    isRight: false,
                },
                {
                    id: "b",
                    text: "April 27",
                    isRight: false,
                },
                {
                    id: "c",
                    text: "June 19",
                    isRight: false,
                },
                {
                    id: "d",
                    text: "December 15",
                    isRight: true,
                },
            ],
        },
    ],
};

export { quizCoffee, quizTea };
