package me.tim.team.quiz_back.question.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class QuestionDTO {
    private Long id;
    private String text;
    private List<AnswerDTO> answers;

}
