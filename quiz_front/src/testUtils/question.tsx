import {getAnswer} from "./answer";

export const getQuestion = (id: number) => ({
    id,
    text: `QuestionText${id}`,
    answers: [getAnswer(1), getAnswer(2), getAnswer(3, true)],
})