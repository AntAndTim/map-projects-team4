import {Question} from "./Question/Question";
import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../config/Config";
import {QuestionModel} from "../models/QuestionModel";
import {Empty} from "antd";
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

    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get(baseUrl(`question/${id}`))
            .then(function (response: AxiosResponse<QuestionModel>) {
                setQuestion(response.data);
            });
    }, [])

    console.log(mode)
    console.log(mode === QuestionMode.new)

    return (
        <>
            {!question?.text && mode !== QuestionMode.new && <Empty />}
            {question?.text && mode === QuestionMode.view && <Question question={question}/>}
            {question?.text && mode === QuestionMode.edit && <EditQuestion question={question}/>}
            {mode === QuestionMode.new && <EditQuestion />}
        </>
    )
}