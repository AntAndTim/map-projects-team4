import React, {useCallback} from "react";
import {AnswerModel} from "../../models/AnswerModel";
import {Answer} from "./Answer";

interface AnswerContainerProps {
    answer: AnswerModel;
    onAnswerClick: (id: number) => void;
    haveAnswered: boolean;
}

/**
 * Component for answer display in quiz mode
 *
 * @component
 * @example
 * const answer = {id: 100, text: 'apple', correct: true}
 * const onAnswerClick = id => console.log(`Question${id} selected`)
 *
 * return (
 *   <AnswerContainer
 *      answer={text}
 *      onAnswerClick={onAnswerClick}
 *      haveAnswered={false}
 *   />
 * )
 */
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