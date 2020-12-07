import React from 'react';
import {Route, Switch} from 'react-router-dom'

import {QuestionsPage} from "../QuestionsPage/QuestionsPage";
import {QuestionMode, QuestionPage} from "../QuestionPage";

type RouteProps = { match: { params: { id: string } } };

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={QuestionsPage}/>
                <Route
                    exact
                    path='/question/new'
                    component={() => (
                        <QuestionPage
                            mode={QuestionMode.new}
                        />
                    )}
                />
                <Route
                    exact
                    path='/question/:id'
                    component={(props: RouteProps) => (
                        <QuestionPage
                            id={Number(props.match.params.id)}
                            mode={QuestionMode.view}
                        />
                    )}
                />
                <Route
                    exact
                    path='/question/:id/edit'
                    component={(props: RouteProps) => (
                        <QuestionPage
                            id={Number(props.match.params.id)}
                            mode={QuestionMode.edit}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}
