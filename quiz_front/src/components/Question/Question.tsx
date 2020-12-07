import {QuestionModel} from "../../models/QuestionModel";
import {Answer} from "../Answer/Answer";
import React, {useCallback, useState} from "react";
import {Button} from "antd";

import {AnswerModel} from "../../models/AnswerModel";
import {calculateColor} from "./Question.utils/Question.utils";

import './Question.css';

interface QuestionProps {
    question: QuestionModel
}

export const Question: React.FC<QuestionProps> = ({question}) => {
    const [answers, setAnswers] = useState<AnswerModel[]>(question.answers || []);
    const [haveAnswered, setHaveAnswered] = useState(false)

    const onAnswerClick = useCallback((id: number) => {
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

    const answerOnQuestion = useCallback(() => {
        setHaveAnswered(true);

        setAnswers(answers => answers.map(answer => {
            return {
                ...answer,
                color: calculateColor(haveAnswered, answer),
            }
        }))
    }, [setHaveAnswered, setAnswers]);

    return (
        <div className="Question">
            <h1 className="Question-Text">{question.text}</h1>
            <div className="Question-Answers">
                {
                    answers.map(answer => (
                        <Answer
                            answer={answer}
                            onAnswerClick={onAnswerClick}
                            haveAnswered={haveAnswered}
                        />
                    ))
                }
            </div>
            <Button
                type="primary"
                onClick={answerOnQuestion}
            >
                Answer
            </Button>
        </div>
    )
}