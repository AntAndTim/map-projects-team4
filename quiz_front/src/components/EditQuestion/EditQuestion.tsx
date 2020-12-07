import {QuestionModel} from "../../models/QuestionModel";
import React, {ChangeEvent, useCallback, useState} from "react";
import {Button, Checkbox, Divider, Input, message} from "antd";
import {AnswerModel} from "../../models/AnswerModel";

import './EditQuestion.css';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";

interface EditQuestionProps {
    question?: QuestionModel
}

export const EditQuestion: React.FC<EditQuestionProps> = ({question}) => {
    const [questionText, setQuestionText] = useState<string>(question?.text || '');
    const [answers, setAnswers] = useState<Partial<AnswerModel>[]>(question?.answers || []);

    const createAnswer = useCallback(() => {
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
                    console.log(response)
                })
                .catch(error => message.error(error.message))
            ;
        } else {
            axios.post(baseUrl(`question`), {text: questionText, answers})
                .then(function (response: AxiosResponse) {
                    console.log(response)
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

    return (
        <div>
            <Input
                className="EditQuestion-Text"
                placeholder="Question text"
                value={questionText}
                onChange={(event) => setQuestionText(event.target.value)}
            />
            <Divider/>
            {
                answers.map((answer, index) => {
                    return (
                        <div className="EditQuestion-Answer">
                            <Input
                                placeholder="Answer text"
                                value={answer.text}
                                onChange={answerTextChangeHandler(index)}
                            />
                            <span>
                                <Checkbox
                                    className="EditQuestion-AnswerCheckbox"
                                    checked={answer.correct}
                                    onChange={answerCorrectnessChangeHandler(index)}
                                >Correct</Checkbox>
                            </span>
                        </div>
                    )
                })
            }
            <div style={{marginBottom: '16px'}}>
                <Button onClick={createAnswer}>Add answer</Button>
            </div>
            <div>
                <Button onClick={submitQuestion}>Submit</Button>
            </div>
        </div>
    )
}