import {Button, Checkbox, Divider, Input} from "antd";
import React, {ChangeEvent} from "react";
import {AnswerModel} from "../../models/AnswerModel";
import {
    AnswerCorrectnessChangeHandler,
    AnswerTextChangeHandler, CreateAnswerHandler, DeleteAnswerHandler,
    QuestionTextChaneHandler, SubmitQuestionHandler
} from "./EditQuestion.container";

import './EditQuestion.css';

interface EditQuestionProps {
    questionText: string;
    onQuestionTextChange: QuestionTextChaneHandler;
    answers: Partial<AnswerModel>[];
    onAnswerTextChange: AnswerTextChangeHandler;
    onAnswerCorrectnessChange: AnswerCorrectnessChangeHandler;
    deleteAnswer: DeleteAnswerHandler;
    createAnswer: CreateAnswerHandler;
    submitQuestion: SubmitQuestionHandler;
}

export const EditQuestion: React.FC<EditQuestionProps> = props => {
    const {
        questionText,
        onQuestionTextChange,
        answers,
        onAnswerTextChange,
        onAnswerCorrectnessChange,
        deleteAnswer,
        createAnswer,
        submitQuestion,
    } = props;

    return (
        <div>
            <Input
                className="EditQuestion-Text"
                placeholder="QuestionContainer text"
                value={questionText}
                onChange={onQuestionTextChange}
            />
            <Divider/>
            {
                answers.map((answer, index) => {
                    return (
                        <div className="EditQuestion-Answer">
                            <Input
                                placeholder="Answer text"
                                value={answer.text}
                                onChange={onAnswerTextChange(index)}
                            />
                            <span>
                                <Checkbox
                                    className="EditQuestion-AnswerCheckbox"
                                    checked={answer.correct}
                                    onChange={onAnswerCorrectnessChange(index)}
                                >Correct</Checkbox>
                            </span>
                            <Button onClick={deleteAnswer(index)}>Delete</Button>
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