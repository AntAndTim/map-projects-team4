import React from 'react';
import {render} from 'enzyme';
import {QuestionListContainer} from "./QuestionList.container";

describe('QuestionListContainer', () => {
    it('Should render component with edit mode', () => {
        const wrapper = render(
            <QuestionListContainer
                editMode
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

    it('Should render component with view mode', () => {
        const wrapper = render(
            <QuestionListContainer
                editMode={false}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});