package me.tim.team.quiz_back.session.repository;

import java.util.Optional;
import me.tim.team.quiz_back.session.model.SessionUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionUserRepository extends JpaRepository<SessionUser, Long> {

    Optional<SessionUser> findByLogin(String login);
}
