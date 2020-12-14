import {QuestionModel} from "../../models/QuestionModel";
import React, {useCallback, useState} from "react";

import {AnswerModel} from "../../models/AnswerModel";
import {calculateColor} from "./Question.utils/Question.utils";
import {Question} from "./Question";

interface QuestionContainerProps {
    question: QuestionModel
}

export type AnswerClickHandler = (id: number) => void;
export type AnswerQuestion = () => void;

/**
 * Component for displaying question in quiz mode
 *
 * @component
 * @example
 * const answers = [{id: 100, text: 'apple', correct: true}, {id: 200, text: 'banana', correct: false}]
 * const question = {id: 121, text: 'Which fruit is green?', answers}
 *
 * return (
 *   <QuestionContainer
 *      question={question}
 *   />
 * )
 */
export const QuestionContainer: React.FC<QuestionContainerProps> = ({question}) => {
    const [answers, setAnswers] = useState<AnswerModel[]>(question.answers || []);
    const [haveAnswered, setHaveAnswered] = useState(false)

    const answerClickHandler = useCallback<AnswerClickHandler>((id: number) => {
        if (haveAnswered) {
            return;
        }

        setAnswers(answers => answers.map(answer => {
            if (id === answer.id) {
                return {...answer, selected: !answer.selected};
            }

            return answer;
        }));
    }, [setAnswers, haveAnswered]);
    const answerQuestion = useCallback<AnswerQuestion>(() => {
        setHaveAnswered(true);

        setAnswers(answers => answers.map(answer => {
            return {
                ...answer,
                color: calculateColor(haveAnswered, answer),
            }
        }))
    }, [setHaveAnswered, setAnswers]);

    return (
        <Question
            question={question}
            answers={answers}
            onAnswerClick={answerClickHandler}
            haveAnswered={haveAnswered}
            answerQuestion={answerQuestion}
        />
    )
}