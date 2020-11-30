import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../config/Config";
import React, {useEffect, useState} from "react";
import {Question} from "./Question";
import {QuestionModel} from "./QuestionModel";
import {Col} from "antd";

export const QuestionList = () => {
    const [questions, setQuestions] = useState<QuestionModel[]>([])
    useEffect(() => {
        axios.get(baseUrl("question"))
            .then(function (response: AxiosResponse<QuestionModel[]>) {
                setQuestions(response.data);
            });
    }, [])

    return <>
        {questions.map((question: QuestionModel) =>
            <Col span={24 / questions.length}>
                <Question question={question}/>
            </Col>
        )}
    </>
}