import {AnswerModel} from "../../../models/AnswerModel";

/**
 * Calculate question color after answering
 *
 * @param answerMode - did you click the answer button
 * @param answer - answer with fields selected and correct
 */
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