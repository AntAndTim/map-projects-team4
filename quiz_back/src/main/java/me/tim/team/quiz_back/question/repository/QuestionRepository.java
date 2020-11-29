package me.tim.team.quiz_back.question.repository;

import me.tim.team.quiz_back.question.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
