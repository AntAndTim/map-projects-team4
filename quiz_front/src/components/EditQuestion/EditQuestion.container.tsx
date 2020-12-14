import {QuestionModel} from "../../models/QuestionModel";
import React, {ChangeEvent, useCallback, useState} from "react";
import {message} from "antd";
import {AnswerModel} from "../../models/AnswerModel";

import {CheckboxChangeEvent} from "antd/es/checkbox";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";
import {EditQuestion} from "./EditQuestion";

interface EditQuestionContainerProps {
    question?: QuestionModel;
    onSuccess: () => void;
}

export type QuestionTextChaneHandler = (event: ChangeEvent<HTMLInputElement>) => void;
export type AnswerTextChangeHandler = (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
export type AnswerCorrectnessChangeHandler = (index: number) => (event: CheckboxChangeEvent) => void;
export type DeleteAnswerHandler = (index: number) => () => void;
export type CreateAnswerHandler = () => void;
export type SubmitQuestionHandler = () => void;

export const EditQuestionContainer: React.FC<EditQuestionContainerProps> = ({question, onSuccess}) => {
    const [questionText, setQuestionText] = useState<string>(question?.text || '');
    const [answers, setAnswers] = useState<Partial<AnswerModel>[]>(question?.answers || []);

    const createAnswer = useCallback<CreateAnswerHandler>(() => {
        setAnswers(answers => {
            return [...answers, {text: '', correct: false}];
        });
    }, [setAnswers])

    const submitQuestion = useCallback(() => {
        if (!questionText || !answers || !answers.length || answers.find(({text}) => !Boolean(text))) {
            message.error('Not correct data');

            return;
        }

        if (question?.id) {
            axios.put(baseUrl(`question`), {text: questionText, answers, id: question.id})
                .then(function (response: AxiosResponse) {
                    onSuccess();
                })
                .catch(error => message.error(error.message))
            ;
        } else {
            axios.post(baseUrl(`question`), {text: questionText, answers})
                .then(function (response: AxiosResponse) {
                    onSuccess();
                })
                .catch(error => message.error(error.message))
            ;
        }
    }, [questionText, answers])

    const answerTextChangeHandler = (index: number) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            setAnswers(answers => {
                return answers.map((answer, answerIndex) => {
                    if (index === answerIndex) {
                        return {
                            ...answer,
                            text: event.target.value
                        }
                    }

                    return answer;
                })
            })
        }

    const answerCorrectnessChangeHandler = (index: number) =>
        (event: CheckboxChangeEvent) => {
            setAnswers(answers => {
                return answers.map((answer, answerIndex) => {
                    if (index === answerIndex) {
                        return {
                            ...answer,
                            correct: event.target.checked,
                        }
                    }

                    return answer;
                })
            })
        }

    const deleteAnswer = (index: number) =>
        () => {
            setAnswers(answers => {
                return answers.filter((answer, answerIndex) => index !== answerIndex)
            })
        }

    const questionTextChaneHandler = useCallback<QuestionTextChaneHandler>(event => setQuestionText(event.target.value), [setQuestionText]);

    return (
        <EditQuestion
            questionText={questionText}
            onQuestionTextChange={questionTextChaneHandler}
            answers={answers}
            onAnswerTextChange={answerTextChangeHandler}
            onAnswerCorrectnessChange={answerCorrectnessChangeHandler}
            deleteAnswer={deleteAnswer}
            createAnswer={createAnswer}
            submitQuestion={submitQuestion}
        />
    )
}