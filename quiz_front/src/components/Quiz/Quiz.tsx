import React from "react";
import {QuestionContainer} from "../Question/Question.container";
import {QuestionModel} from "../../models/QuestionModel";
import {Button, Progress} from "antd";

import './Quiz.css';
import {QuizEnd} from "../QuizEnd/QuizEnd";
import {AnswerHandler} from "./Quiz.container";

interface QuizProps {
    question: QuestionModel;
    onNext?: () => void;
    isEnd: boolean;
    isLastQuestion: boolean;
    scores: number;
    hasAnswered: boolean;
    onAnswer: AnswerHandler;
    scoresPersent: number;
    progressPersent: number;
}

export const Quiz: React.FC<QuizProps> = props => {
    const {
        question,
        onNext,
        isLastQuestion,
        isEnd,
        scores,
        hasAnswered,
        onAnswer,

        scoresPersent,
        progressPersent,
    } = props;

    if (isEnd) {
        return (
            <QuizEnd points={scoresPersent} />
        )
    }

    return (
        <div className="Quiz">
            <div className="Quiz-ScoresProgress">
                <Progress
                    type="circle"
                    percent={scoresPersent}
                    status="active"
                    width={100}
                />
            </div>
            <QuestionContainer
                question={question}
                onAnswer={onAnswer}
            />
            <div className="Quiz-Footer">
                {
                    hasAnswered &&
                    <Button onClick={onNext} className="Quiz-Button">
                        {
                            isLastQuestion ? "Finish" : "Next"
                        }
                    </Button>
                }
            </div>
            <div className="Quiz-Progress">
                <Progress
                    percent={progressPersent}
                    status="active"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                />
            </div>
        </div>
    )
}