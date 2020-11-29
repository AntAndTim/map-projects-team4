package me.tim.team.quiz_back.question.controller;

import me.tim.team.quiz_back.question.model.QuestionDTO;
import me.tim.team.quiz_back.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public void createQuestion(@RequestBody QuestionDTO questionDTO) {
        questionService.create(questionDTO);
    }

    @GetMapping
    public List<QuestionDTO> getQuestions() {
        return questionService.getQuestions();
    }

    @GetMapping("{id}")
    public ResponseEntity<QuestionDTO> getQuestionById(@PathVariable("id") Long id) {
        QuestionDTO questionDTOFromRepository = questionService.getQuestionById(id);

        if (questionDTOFromRepository == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(questionDTOFromRepository);
    }

    @PutMapping
    public ResponseEntity<QuestionDTO> updateQuestion(@RequestBody QuestionDTO questionDTO) {
        QuestionDTO questionDTOFromRepository = questionService.updateQuestion(questionDTO);

        if (questionDTOFromRepository == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(questionService.updateQuestion(questionDTO));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<QuestionDTO> deleteQuestion(@PathVariable("id") Long id) {
        QuestionDTO questionDTOFromRepository = questionService.deleteQuestion(id);

        if (questionDTOFromRepository == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(questionDTOFromRepository);
    }
}
