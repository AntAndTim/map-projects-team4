import {Card} from "antd";
import React from "react";
import {AnswerModel} from "../../models/AnswerModel";

import './Answer.css'

interface AnswerProps {
    answer: AnswerModel;
    haveAnswered: boolean;
    onClick: () => void;
}

export const Answer: React.FC<AnswerProps> = props => {
    const {
        answer,
        haveAnswered,
        onClick,
    } = props;

    const className = ["Answer", answer.selected && "Answer_selected", answer.color && `Answer_${answer.color}`].filter(Boolean).join(' ');

    return (
        <Card
            hoverable={!haveAnswered}
            className={className}
            onClick={onClick}
        >
            {answer.text}
        </Card>
    )
}