package me.tim.team.quiz_back.question.service;

import me.tim.team.quiz_back.question.model.Question;
import me.tim.team.quiz_back.question.model.QuestionDTO;
import me.tim.team.quiz_back.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    private final QuestionRepository repository;

    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
    }

    public void create(QuestionDTO question) {
        repository.save(new Question(null, question.getText(), question.getAnswers(), question.getCorrectAnswer()));
    }
}
