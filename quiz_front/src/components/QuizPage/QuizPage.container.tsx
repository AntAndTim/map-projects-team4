import React, {useEffect, useState} from "react";
import {QuizPage} from "./QuizPage";
import {QuestionModel} from "../../models/QuestionModel";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";

export const QuizPageContainer = () => {
    const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);

        axios.get(baseUrl("question"))
            .then(function (response: AxiosResponse<QuestionModel[]>) {
                setQuestions(response.data);
                setLoading(false);
            });
    }, [])

    return (
        <QuizPage
            questions={questions}
            loading={loading}
        />
    )
}