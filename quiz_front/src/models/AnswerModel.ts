export interface AnswerModel {
    id: number;
    text: string;
    correct: boolean;
    selected?: boolean;
    color?: string;
}