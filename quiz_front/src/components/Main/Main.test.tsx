import React from 'react';
import {render} from 'enzyme';
import {Main} from "./Main";
import {BrowserRouter} from "react-router-dom";

describe('Main', () => {
    it('Should render component', () => {
        const wrapper = render(
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        );

        expect(wrapper).toMatchSnapshot();
    })
});