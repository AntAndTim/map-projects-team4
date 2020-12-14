import React, {useCallback, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";
import {QuestionModel} from "../../models/QuestionModel";
import {QuestionPage} from "./QuestionPage";

export enum QuestionMode {
    view = 'view',
    edit = 'edit',
    new = 'new',
}

interface QuestionPageProps {
    id?: number;
    mode: QuestionMode;
}

export const QuestionPageContainer: React.FC<QuestionPageProps> = ({id, mode}) => {
    const [question, setQuestion] = useState<QuestionModel | undefined>(undefined);
    const [success, setSuccess] = useState(false);

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!id) {
            return;
        }

        setLoading(true);

        axios.get(baseUrl(`question/${id}`))
            .then(function (response: AxiosResponse<QuestionModel>) {
                setQuestion(response.data);
                setLoading(false);
            });
    }, [])

    const successHandler = useCallback(() => setSuccess(true), [setSuccess]);

    return (
        <QuestionPage
            question={question}
            loading={loading}
            success={success}
            onSuccess={successHandler}
            mode={mode}
        />
    )
}