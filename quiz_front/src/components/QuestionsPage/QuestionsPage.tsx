import React, {useCallback, useState} from 'react';
import {QuestionList} from "../QuestionsList/QuestionList";
import {Switch} from "antd";

import './QuestionsPage.css'

export const QuestionsPage = () => {
    const initialEditMode = localStorage.getItem('editMode') === 'true';
    const [editMode, setEditMode] = useState(initialEditMode);

    const editModeChangeHandler = useCallback(() => {
        const value = !editMode;

        setEditMode(value);
        localStorage.setItem('editMode', String(value));
    }, [editMode, setEditMode])

    return (
        <div className="QuestionsPage">
            <div className="QuestionsPage-Mode">
                Turn on edit mode
                <Switch checked={editMode} onChange={editModeChangeHandler}/>
            </div>
            <QuestionList editMode={editMode}/>
        </div>
    );
}
