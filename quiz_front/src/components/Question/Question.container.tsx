import {QuestionModel} from "../../models/QuestionModel";
import React, {useCallback, useEffect, useState} from "react";

import {AnswerModel} from "../../models/AnswerModel";
import {calculateColor} from "./Question.utils/Question.utils";
import {Question} from "./Question";
import {AnswerHandler} from "../Quiz/Quiz.container";

interface QuestionContainerProps {
    question: QuestionModel;
    onAnswer?: AnswerHandler;
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
export const QuestionContainer: React.FC<QuestionContainerProps> = ({question, onAnswer}) => {
    const [answers, setAnswers] = useState<AnswerModel[]>(question.answers || []);
    const [haveAnswered, setHaveAnswered] = useState(false)

    const resetState = useCallback(() => {
        setAnswers(question.answers || []);
        setHaveAnswered(false);
    }, [setAnswers, question.answers, setHaveAnswered]);

    // If answers are new it means that it is different question
    // So we need reset state
    useEffect(() => {
        resetState();
    }, [question.answers])

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

        setAnswers(answers => {
            const newAnswers =  answers.map(answer => {
                return {
                    ...answer,
                    color: calculateColor(haveAnswered, answer),
                }
            })

            onAnswer?.(newAnswers);

            return newAnswers;
        })
    }, [setHaveAnswered, setAnswers, answers]);

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