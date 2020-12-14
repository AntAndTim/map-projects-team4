package me.tim.team.quiz_back.session.repository;

import me.tim.team.quiz_back.session.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {

}
