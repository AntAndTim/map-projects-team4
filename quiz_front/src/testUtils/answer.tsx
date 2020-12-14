export const getAnswer = (id: number, correct?: boolean, selected?: boolean) => ({
    id,
    text: `AnswerText${id}`,
    correct: Boolean(correct),
    selected: Boolean(selected),
})