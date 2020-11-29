package me.tim.team.quiz_back.question.service;

import me.tim.team.quiz_back.question.mapper.QuestionMapper;
import me.tim.team.quiz_back.question.model.Question;
import me.tim.team.quiz_back.question.model.QuestionDTO;
import me.tim.team.quiz_back.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final QuestionRepository repository;
    private final QuestionMapper mapper;

    public QuestionService(QuestionRepository repository, QuestionMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public void createQuestion(QuestionDTO questionDTO) {
        repository.save(mapper.map(questionDTO));
    }

    public QuestionDTO getQuestionById(Long id) {
        return mapper.map(repository.findById(id).orElse(null));
    }

    public List<QuestionDTO> getQuestions() {
        return repository.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

    public QuestionDTO updateQuestion(QuestionDTO questionDTO) {
        if (repository.findById(questionDTO.getId()).isEmpty()) {
            return null;
        }

        repository.save(mapper.map(questionDTO));

        return questionDTO;
    }

    public QuestionDTO deleteQuestion(Long id) {
        Question questionFromRepository = repository.findById(id).orElse(null);

        if (questionFromRepository != null) {
            repository.delete(questionFromRepository);
        }

        return mapper.map(questionFromRepository);
    }
}
