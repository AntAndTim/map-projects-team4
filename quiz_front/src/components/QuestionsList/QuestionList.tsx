import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../../config/Config";
import React, {useEffect, useState} from "react";
import {Empty, List, Skeleton} from "antd";

import './QuestionList.css';
import {Link} from "react-router-dom";
import {QuestionModel} from "../../models/QuestionModel";

const blockName = "QuestionsList"

interface QuestionListProps {
    editMode: boolean;
}

export const QuestionList: React.FC<QuestionListProps> = ({editMode}) => {
    const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);

        axios.get(baseUrl("question"))
            .then(function (response: AxiosResponse<QuestionModel[]>) {
                setQuestions(response.data);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <Skeleton active/>
    }

    if (!questions || !questions.length) {
        return <Empty />;
    }

    return (
            <>
                <List
                    className={blockName}
                    header={<div>Questions</div>}
                    bordered
                    dataSource={questions}
                    renderItem={(item: QuestionModel) => (
                        <List.Item className={`${blockName}-Item`}>
                            {item.text}
                            <Link
                                className={`${blockName}-Button`}
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