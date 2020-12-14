import React from 'react';
import {render} from 'enzyme';
import {AnswerContainer} from "./Answer.container";
import {AnswerModel} from "../../models/AnswerModel";

const answer: AnswerModel = {
    id: 1,
    text: "AnswerText",
    correct: false,
}

describe('AnswerContainer', () => {
    it('Should render component', () => {
        const wrapper = render(
            <AnswerContainer
                answer={answer}
                onAnswerClick={jest.fn}
                haveAnswered={false}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});