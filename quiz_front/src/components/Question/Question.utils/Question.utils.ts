import {AnswerModel} from "../../../models/AnswerModel";
export const calculateColor = (answerMode: boolean, answer: AnswerModel) => {
    if (answerMode) {
        return undefined;
    }

    if (answer.selected) {
        if (answer.correct) {
            return 'green';
        }

        return 'red';
    }

    if (answer.correct) {
        return 'yellow';
    }

    return undefined;
}