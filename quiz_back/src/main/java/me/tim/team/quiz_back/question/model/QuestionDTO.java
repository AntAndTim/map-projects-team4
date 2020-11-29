package me.tim.team.quiz_back.question.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
//@AllArgsConstructor
public class QuestionDTO {
    private String text;
    private String answers;
    private String correctAnswer;
}
