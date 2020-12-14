import React, {useCallback, useState} from "react";
import {QuestionModel} from "../../models/QuestionModel";
import {Quiz} from "./Quiz";
import {AnswerModel} from "../../models/AnswerModel";

interface QuizContainerProps {
    questions: QuestionModel[],
}

export type AnswerHandler = (answers: AnswerModel[]) => void;

export const QuizContainer: React.FC<QuizContainerProps> = props => {
    const {
        questions,
    } = props;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [scores, setScores] = useState(0);

    const isEnd = currentQuestionIndex === questions.length;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const nextQuestionHandler = useCallback(() => {
        if (!hasAnswered) {
            return;
        }

        setCurrentQuestionIndex(index => index + 1)
        setHasAnswered(false);
    }, [currentQuestionIndex, hasAnswered]);

    const answerHandler = useCallback<AnswerHandler>((answers) => {
        setHasAnswered(true);

        let hasPoint = false;

        answers.forEach(answer => {
            if (!answer.color) {
                return;
            }

            if (answer.color === 'green') {
                hasPoint = true;
                return;
            }

            hasPoint = false;
        })

        hasPoint && setScores(scores + 1);
    }, [setHasAnswered, setScores, scores]);

    const scoresPersent = Math.floor((scores * 100) / questions.length);
    const progressPersent = Math.floor(((currentQuestionIndex + 1) * 100) / questions.length);

    return (
        <Quiz
            question={questions[currentQuestionIndex]}
            isEnd={isEnd}
            isLastQuestion={isLastQuestion}
            onNext={isEnd ? undefined : nextQuestionHandler}
            scores={scores}
            hasAnswered={hasAnswered}
            onAnswer={answerHandler}

            scoresPersent={scoresPersent}
            progressPersent={progressPersent}
        />
    )
}