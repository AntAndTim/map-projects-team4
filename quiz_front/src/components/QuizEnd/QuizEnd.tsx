import {Result} from "antd";
import React from "react";

interface QuizEndProps {
    points: number;
}

export const QuizEnd: React.FC<QuizEndProps> = props => {
    const {
        points,
    } = props;

    return (
        <Result
            status="success"
            title={`Congratulations! You passed the quiz and got ${points}%`}
        />
    )
}