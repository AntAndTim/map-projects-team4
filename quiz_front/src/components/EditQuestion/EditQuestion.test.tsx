import React from 'react';
import {render} from 'enzyme';
import {EditQuestionContainer} from "./EditQuestion.container";
import {getQuestion} from "../../testUtils/question";

const question = getQuestion(100);

describe('EditQuestionContainer', () => {
    it('Should render component', () => {
        const wrapper = render(
            <EditQuestionContainer
                question={question}
                onSuccess={jest.fn}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});