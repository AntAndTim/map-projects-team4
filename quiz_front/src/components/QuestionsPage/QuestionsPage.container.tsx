import React, {useCallback, useState} from 'react';
import {QuestionsPage} from "./QuestionsPage";

/**
 * Component for displaying questions list page
 *
 * @component
 * @example
 * return <QuestionsPageContainer/>
 */
export const QuestionsPageContainer = () => {
    const initialEditMode = localStorage.getItem('editMode') === 'true';
    const [editMode, setEditMode] = useState(initialEditMode);

    const editModeChangeHandler = useCallback(() => {
        const value = !editMode;

        setEditMode(value);
        localStorage.setItem('editMode', String(value));
    }, [editMode, setEditMode])

    const QuizClickHandler = useCallback(() => document.location.href = "/quiz", []);

    return (
        <QuestionsPage
            editMode={editMode}
            onEditModeChange={editModeChangeHandler}
            onQuizClick={QuizClickHandler}
        />
    );
}
