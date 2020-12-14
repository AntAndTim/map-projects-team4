import React, {useCallback, useState} from 'react';
import {QuestionsPage} from "./QuestionsPage";

export const QuestionsPageContainer = () => {
    const initialEditMode = localStorage.getItem('editMode') === 'true';
    const [editMode, setEditMode] = useState(initialEditMode);

    const editModeChangeHandler = useCallback(() => {
        const value = !editMode;

        setEditMode(value);
        localStorage.setItem('editMode', String(value));
    }, [editMode, setEditMode])

    return (
        <QuestionsPage
            editMode={editMode}
            onEditModeChange={editModeChangeHandler}
        />
    );
}
