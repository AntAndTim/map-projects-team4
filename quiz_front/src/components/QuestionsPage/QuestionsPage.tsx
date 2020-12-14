import {Switch} from "antd";
import {QuestionListContainer} from "../QuestionsList/QuestionList.container";
import React from "react";

import './QuestionsPage.css'

interface QuestionsPageProps {
    editMode: boolean;
    onEditModeChange: () => void;
}

export const QuestionsPage: React.FC<QuestionsPageProps> = props => {
    const {
        editMode,
        onEditModeChange,
    } = props;

    return (
        <div className="QuestionsPage">
            <div className="QuestionsPage-Mode">
                Turn on edit mode
                <Switch checked={editMode} onChange={onEditModeChange}/>
            </div>
            <QuestionListContainer editMode={editMode}/>
        </div>
    )
}