import {Checkbox} from 'antd';
import React, {useState} from "react";
import {AnswerModel} from "./AnswerModel";
import './Answer.css'

export const Answer = ({answer}: { answer: AnswerModel }) => {
    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const checkBoxStyle = answer.correct
        ? {'--check-box-color': 'green' as const}
        : {'--check-box-color': 'red' as const};

    return (
        <div>
            <Checkbox
                disabled={disabled}
                checked={checked}
                onChange={(e) => {
                    setChecked(e.target.checked)
                    setDisabled(true)
                }}
                style={checkBoxStyle}
            >
                {answer.text}
            </Checkbox>
        </div>
    );
}