export class AnswerModel {
    constructor(id: number, text: string, correct: boolean) {
        this.id = id;
        this.text = text;
        this.correct = correct;
    }

    id: number
    text: string
    correct: boolean
}