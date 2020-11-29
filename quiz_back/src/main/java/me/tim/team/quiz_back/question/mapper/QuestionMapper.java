package me.tim.team.quiz_back.question.mapper;

import me.tim.team.quiz_back.question.model.Answer;
import me.tim.team.quiz_back.question.model.AnswerDTO;
import me.tim.team.quiz_back.question.model.Question;
import me.tim.team.quiz_back.question.model.QuestionDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    QuestionDTO map(Question question);

    Question map(QuestionDTO questionDTO);

    AnswerDTO map(Answer answer);

    Answer map(AnswerDTO answerDTO);
}
