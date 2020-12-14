import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'

import {QuestionsPageContainer} from "../QuestionsPage/QuestionsPage.container";
import {QuestionMode, QuestionPageContainer} from "../QuestionPage/QuestionPage.container";

type RouteProps = { match: { params: { id: string } } };

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={QuestionsPageContainer}/>
                <Route
                    exact
                    path='/question/new'
                    component={() => (
                        <QuestionPageContainer
                            mode={QuestionMode.new}
                        />
                    )}
                />
                <Route
                    exact
                    path='/question/:id'
                    component={(props: RouteProps) => (
                        <QuestionPageContainer
                            id={Number(props.match.params.id)}
                            mode={QuestionMode.view}
                        />
                    )}
                />
                <Route
                    exact
                    path='/question/:id/edit'
                    component={(props: RouteProps) => (
                        <QuestionPageContainer
                            id={Number(props.match.params.id)}
                            mode={QuestionMode.edit}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}
