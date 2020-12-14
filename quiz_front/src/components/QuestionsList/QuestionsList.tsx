import {Empty, List, Skeleton} from "antd";
import {QuestionModel} from "../../models/QuestionModel";
import {Link} from "react-router-dom";
import React from "react";

import './QuestionList.css';

interface QuestionsListProps {
    questions?: QuestionModel[];
    loading: boolean;
}

export const QuestionsList: React.FC<QuestionsListProps> = props => {
    const {
        questions,
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
                        <div>
                            <Link
                                className="QuestionsList-Button"
                                to={`/question/${item.id}`}
                            >
                                Open
                            </Link>
                            <Link
                                className="QuestionsList-Button"
                                to={`/question/${item.id}/edit`}
                            >
                                Edit
                            </Link>
                        </div>
                    </List.Item>)}
            />
            <Link to="/question/new">Create question</Link>
        </>
    )
}