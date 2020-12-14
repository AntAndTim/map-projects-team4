import React from 'react';
import {render} from 'enzyme';
import {QuestionContainer} from "./Question.container";
import {getQuestion} from "../../testUtils/question";

describe('Question', () => {
    it('Should render component', () => {
        const wrapper = render(
            <QuestionContainer
                question={getQuestion(200)}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});