import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";
import React, {useEffect, useState} from "react";

import {QuestionModel} from "../../models/QuestionModel";
import {QuestionsList} from "./QuestionsList";

interface QuestionListContainerProps {
    editMode: boolean;
}

export const QuestionListContainer: React.FC<QuestionListContainerProps> = ({editMode}) => {
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
        <QuestionsList
            questions={questions}
            editMode={editMode}
            loading={loading}
        />
    )
}