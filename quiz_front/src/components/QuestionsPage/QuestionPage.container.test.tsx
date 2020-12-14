import {render, mount} from "enzyme";
import React from "react";
import {QuestionsPageContainer} from "./QuestionsPage.container";
import {QuestionsPage} from "./QuestionsPage";

describe('QuestionsPageContainer', () => {
    it('Should render component', () => {
        const wrapper = render(
            <QuestionsPageContainer/>
        );

        expect(wrapper).toMatchSnapshot();
    })

    // const Component = () => <div>Hiii</div>;
    //
    // const wrapper = mount(
    //     <Component />
    // );
    //
    // it('Set edit mode', () => {
    //     const editMode = wrapper.find(QuestionsPage).prop('editMode');
    //     expect(editMode).toEqual(false);
    //
    //     const onEditModeChange = wrapper.find(QuestionsPage).prop('onEditModeChange');
    //     onEditModeChange();
    //
    //     const editModeAfterChange = wrapper.find(QuestionsPage).prop('editMode');
    //     expect(editModeAfterChange).toEqual(false);
    // })
});