package me.tim.team.quiz_back.question.controller;

import me.tim.team.quiz_back.question.model.QuestionDTO;
import me.tim.team.quiz_back.question.service.QuestionService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public void create(@RequestBody QuestionDTO questionDTO) {
        questionService.create(questionDTO);
    }
}
