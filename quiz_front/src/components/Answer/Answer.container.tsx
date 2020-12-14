import React, {useCallback} from "react";
import {AnswerModel} from "../../models/AnswerModel";
import {Answer} from "./Answer";

interface AnswerContainerProps {
    answer: AnswerModel;
    onAnswerClick: (id: number) => void;
    haveAnswered: boolean;
}

export const AnswerContainer: React.FC<AnswerContainerProps> = ({
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