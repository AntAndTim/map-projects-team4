import React, {useCallback} from "react";
import {AnswerModel} from "../../models/AnswerModel";
import {Answer} from "./Answer";

interface AnswerProps {
    answer: AnswerModel;
    onAnswerClick: (id: number) => void;
    haveAnswered: boolean;
}

export const AnswerContainer: React.FC<AnswerProps> = ({
  answer,
  onAnswerClick,
  haveAnswered,
}) => {
    const clickHandler = useCallback(() => onAnswerClick(answer.id), [onAnswerClick]);

    return (
        <Answer
            answer={answer}
            onClick={clickHandler}
            haveAnswered={haveAnswered}
        />
    );
}