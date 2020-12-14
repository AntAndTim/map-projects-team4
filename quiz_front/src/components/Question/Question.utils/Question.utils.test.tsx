import {calculateColor} from "./Question.utils";
import {getAnswer} from "../../../testUtils/answer";

describe('Question', () => {
    it('Should return undefined because now answer mode', () => {
        expect(calculateColor(true, getAnswer(100)))
            .toEqual(undefined);
    })

    it('Should return green because user select correct answer', () => {
        expect(calculateColor(false, getAnswer(100, true, true)))
            .toEqual('green');
    })

    it('Should return red because user select uncorrect answer', () => {
        expect(calculateColor(false, getAnswer(100, false, true)))
            .toEqual('red');
    })

    it('Should return yellow because user does not select correct answer', () => {
        expect(calculateColor(false, getAnswer(100, true, false)))
            .toEqual('yellow');
    })

    it('Should return undefined because user does not select uncorrect answer', () => {
        expect(calculateColor(false, getAnswer(100)))
            .toEqual(undefined);
    })
});