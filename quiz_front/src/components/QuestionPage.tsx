import React, {useCallback, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../config/Config";
import {QuestionModel} from "../models/QuestionModel";
import {Empty, Result, Spin} from "antd";
import {Question} from "./Question/Question";
import {EditQuestion} from "./EditQuestion/EditQuestion";

export enum QuestionMode {
    view = 'view',
    edit = 'edit',
    new = 'new',
}

interface QuestionPageProps {
    id?: number;
    mode: QuestionMode;
}

export const QuestionPage: React.FC<QuestionPageProps> = ({id, mode}) => {
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

    if (loading) {
        return <div style={{textAlign: 'center'}}><Spin /></div>;
    }

    return (
        <>
            {
                success ?
                    <Result
                        status="success"
                        title="Successfully"
                    /> :
                    <>
                        {!question?.text && mode !== QuestionMode.new && <Empty />}
                        {question?.text && mode === QuestionMode.view && <Question question={question}/>}
                        {question?.text && mode === QuestionMode.edit && <EditQuestion question={question} onSuccess={successHandler}/>}
                        {mode === QuestionMode.new && <EditQuestion onSuccess={successHandler} />}
                    </>
            }
        </>
    )
}