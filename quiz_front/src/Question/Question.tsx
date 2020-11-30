import {Card} from "antd";
import {QuestionModel} from "./QuestionModel";
import {Answer} from "../Answer/Answer";
import React from "react";

export const Question = ({question}: { question: QuestionModel }) =>
    <Card title={question.text} style={{width: 300}}>
        <>
            {question.answers.map(answer => <Answer answer={answer}/>)}
        </>
    </Card>