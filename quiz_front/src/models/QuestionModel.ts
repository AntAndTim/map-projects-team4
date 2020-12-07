import {AnswerModel} from "./AnswerModel";

export interface QuestionModel {
    id: number;
    text: string;
    answers: AnswerModel[];
}