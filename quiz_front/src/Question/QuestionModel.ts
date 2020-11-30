import {AnswerModel} from "../Answer/AnswerModel";

export class QuestionModel {
    constructor(id: number, text: string, answers: AnswerModel[]) {
        this.id = id;
        this.text = text;
        this.answers = answers;
    }

    id: number
    text: string
    answers: AnswerModel[]
}