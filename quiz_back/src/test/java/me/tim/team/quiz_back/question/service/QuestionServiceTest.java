package me.tim.team.quiz_back.question.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Collections;
import me.tim.team.quiz_back.question.model.AnswerDTO;
import me.tim.team.quiz_back.question.model.QuestionDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class QuestionServiceTest {

    @Autowired
    private QuestionService questionService;

    private QuestionDTO getDto() {
        var questionDTO = new QuestionDTO();

        var answerDto = new AnswerDTO();
        answerDto.setCorrect(true);
        answerDto.setText("World");

        questionDTO.setAnswers(Collections.singletonList(answerDto));
        questionDTO.setText("Hello");

        return questionDTO;
    }

    @Test
    void createQuestion() {
        questionService.createQuestion(getDto());
    }

    @Test
    void getQuestionById() {
        questionService.createQuestion(getDto());
        assertEquals(questionService.getQuestionById(1L).getText(), "Hello");
    }

    @Test
    void getQuestions() {
        questionService.createQuestion(getDto());
        assertEquals(questionService.getQuestions().stream().findFirst().orElse(null).getText(), "Hello");
    }

    @Test
    void updateQuestion() {
    }

    @Test
    void deleteQuestion() {
    }
}