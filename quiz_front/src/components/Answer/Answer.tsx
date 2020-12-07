import {Card} from 'antd';
import React, {useCallback} from "react";
import {AnswerModel} from "../../models/AnswerModel";
import './Answer.css'

interface AnswerProps {
    answer: AnswerModel;
    onAnswerClick: (id: number) => void;
    haveAnswered: boolean;
}

export const Answer: React.FC<AnswerProps> = ({
  answer,
  onAnswerClick,
  haveAnswered,
}) => {
    const onClick = useCallback(() => onAnswerClick(answer.id), [onAnswerClick]);
    const className = ["Answer", answer.selected && "Answer_selected", answer.color && `Answer_${answer.color}`].filter(Boolean).join(' ');

    return (
        <Card
            hoverable={!haveAnswered}
            className={className}
            onClick={onClick}
        >
            {answer.text}
        </Card>
    );
}