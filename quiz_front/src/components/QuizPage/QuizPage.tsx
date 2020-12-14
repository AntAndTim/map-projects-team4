import React from "react";
import {QuestionModel} from "../../models/QuestionModel";
import {Empty, Spin} from "antd";
import {QuizContainer} from "../Quiz/Quiz.container";

interface QuizPageProps {
    questions?: QuestionModel[],
    loading: boolean,
}

export const QuizPage: React.FC<QuizPageProps> = props => {
    const {
        questions,
        loading,
    } = props;

    if (loading) {
        return <div style={{textAlign: 'center'}}><Spin /></div>;
    }

    if (!questions || !questions.length) {
        return <Empty />;
    }

    return (
        <div className="QuizPage">
            <QuizContainer questions={questions} />
        </div>
    )
}