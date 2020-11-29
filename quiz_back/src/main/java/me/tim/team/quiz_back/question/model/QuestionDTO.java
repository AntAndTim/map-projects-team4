package me.tim.team.quiz_back.question.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class QuestionDTO {
    private Long id;
    private String text;
    private String answers;
    private String correctAnswer;
}
