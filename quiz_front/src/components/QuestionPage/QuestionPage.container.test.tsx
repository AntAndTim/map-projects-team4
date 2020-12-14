import React from 'react';
import {render} from 'enzyme';
import {QuestionMode, QuestionPageContainer} from "./QuestionPage.container";

describe('QuestionPageContainer', () => {
    it('Should render component with mode view', () => {
        const wrapper = render(
            <QuestionPageContainer
                id={200}
                mode={QuestionMode.view}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

    it('Should render component with mode edit', () => {
        const wrapper = render(
            <QuestionPageContainer
                id={200}
                mode={QuestionMode.edit}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

    it('Should render component with mode new', () => {
        const wrapper = render(
            <QuestionPageContainer
                id={200}
                mode={QuestionMode.new}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
});