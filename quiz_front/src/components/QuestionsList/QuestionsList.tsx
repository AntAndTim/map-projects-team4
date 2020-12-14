import {Empty, List, Skeleton} from "antd";
import {QuestionModel} from "../../models/QuestionModel";
import {Link} from "react-router-dom";
import React from "react";

import './QuestionList.css';

interface QuestionsListProps {
    questions?: QuestionModel[];
    editMode: boolean;
    loading: boolean;
}

export const QuestionsList: React.FC<QuestionsListProps> = props => {
    const {
        questions,
        editMode,
        loading,
    } = props;

    if (loading) {
        return <Skeleton active/>
    }

    if (!questions || !questions.length) {
        return <Empty />;
    }

    return (
        <>
            <List
                className={"QuestionsList"}
                header={<div>Questions</div>}
                bordered
                dataSource={questions}
                renderItem={(item: QuestionModel) => (
                    <List.Item className="QuestionsList-Item">
                        {item.text}
                        <Link
                            className="QuestionsList-Button"
                            to={editMode ? `/question/${item.id}/edit` : `/question/${item.id}`}
                        >
                            {editMode ? 'Edit' : 'Open'}
                        </Link>
                    </List.Item>)}
            />
            {editMode && <Link to="/question/new">Create question</Link>}
        </>
    )
}