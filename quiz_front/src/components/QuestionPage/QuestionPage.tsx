import {Empty, Result, Spin} from "antd";
import {QuestionContainer} from "../Question/Question.container";
import {EditQuestionContainer} from "../EditQuestion/EditQuestion.container";
import React from "react";
import {QuestionMode} from "./QuestionPage.container";
import {QuestionModel} from "../../models/QuestionModel";

interface QuestionPageProps {
    loading: boolean;
    success: boolean;
    question?: QuestionModel;
    mode: QuestionMode;
    onSuccess: () => void;
}

export const QuestionPage: React.FC<QuestionPageProps> = props => {
    const {
        loading,
        success,
        question,
        mode,
        onSuccess,
    } = props;

    if (loading) {
        return <div style={{textAlign: 'center'}}><Spin /></div>;
    }

    if (success) {
        return (
            <Result
                status="success"
                title="Successfully"
            />
        )
    }

    return (
        <>
            {!question?.text && mode !== QuestionMode.new && <Empty />}
            {question?.text && mode === QuestionMode.view && <QuestionContainer question={question}/>}
            {question?.text && mode === QuestionMode.edit && <EditQuestionContainer question={question} onSuccess={onSuccess}/>}
            {mode === QuestionMode.new && <EditQuestionContainer onSuccess={onSuccess} />}
        </>
    )
}