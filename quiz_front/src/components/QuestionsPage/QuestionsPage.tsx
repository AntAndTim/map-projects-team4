import React, {useState} from 'react';
import {QuestionList} from "../QuestionsList/QuestionList";
import {Switch} from "antd";

import './QuestionsPage.css'

export const QuestionsPage = () => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="QuestionsPage">
            <div className="QuestionsPage-Mode">
                Turn on edit mode
                <Switch checked={editMode} onChange={() => setEditMode(!editMode)} />
            </div>
            <QuestionList editMode={editMode} />
        </div>
    );
}
