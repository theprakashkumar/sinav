import { Option } from "../types/QuizTypes";

const scoreKeeper = (curScore: number, option: Option): number => {
    return option.isRight ? curScore + 1 : curScore;
};
export default scoreKeeper;
