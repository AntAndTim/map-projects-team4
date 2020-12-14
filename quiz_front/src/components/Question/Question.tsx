import {AnswerContainer} from "../Answer/Answer.container";
import {Button} from "antd";
import React from "react";
import {QuestionModel} from "../../models/QuestionModel";
import {AnswerModel} from "../../models/AnswerModel";
import {AnswerClickHandler, AnswerQuestion} from "./Question.container";

import './Question.css';

interface QuestionProps {
    question: QuestionModel;
    answers: AnswerModel[];
    onAnswerClick: AnswerClickHandler;
    haveAnswered: boolean;
    answerQuestion: AnswerQuestion;
}

export const Question: React.FC<QuestionProps> = props => {
    const {
        question,
        answers,
        onAnswerClick,
        haveAnswered,
        answerQuestion,
    } = props;

    return (
        <div className="Question">
            <h1 className="Question-Text">{question.text}</h1>
            <div className="Question-Answers">
                {
                    answers.map(answer => (
                        <AnswerContainer
                            answer={answer}
                            onAnswerClick={onAnswerClick}
                            haveAnswered={haveAnswered}
                        />
                    ))
                }
            </div>
            <Button
                type="primary"
                onClick={answerQuestion}
            >
                Answer
            </Button>
        </div>
    )
}