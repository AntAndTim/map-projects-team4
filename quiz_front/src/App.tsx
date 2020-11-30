import React from 'react';
import {QuestionList} from "./Question/QuestionList";
import {PageHeader, Row} from "antd";

function App() {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Questions"
                subTitle="Here you can find questions for the quiz"
            />
            <Row gutter={[16, 16]} justify="start">
                <QuestionList/>
            </Row>
        </div>
    );
}

export default App;
