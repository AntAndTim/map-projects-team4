package me.tim.team.quiz_back.session.service;

import java.util.Collections;
import me.tim.team.quiz_back.session.mapper.SessionMapper;
import me.tim.team.quiz_back.session.mapper.SessionUserMapper;
import me.tim.team.quiz_back.session.model.Session;
import me.tim.team.quiz_back.session.model.SessionDto;
import me.tim.team.quiz_back.session.model.SessionUserDto;
import me.tim.team.quiz_back.session.repository.SessionRepository;
import me.tim.team.quiz_back.session.repository.SessionUserRepository;
import org.springframework.stereotype.Service;

@Service
public class SessionService {

    private final SessionMapper sessionMapper;
    private final SessionUserMapper sessionUserMapper;
    private final SessionRepository sessionRepository;
    private final SessionUserRepository sessionUserRepository;

    public SessionService(
        SessionMapper sessionMapper,
        SessionUserMapper sessionUserMapper,
        SessionRepository sessionRepository,
        SessionUserRepository sessionUserRepository
    ) {
        this.sessionMapper = sessionMapper;
        this.sessionUserMapper = sessionUserMapper;
        this.sessionRepository = sessionRepository;
        this.sessionUserRepository = sessionUserRepository;
    }

    public SessionDto create(SessionUserDto sessionUserDto) {
        var userOpt = sessionUserRepository.findByLogin(sessionUserDto.getLogin());

        if (userOpt.isEmpty()) {
            var sessionUser = sessionUserRepository.save(sessionUserMapper.map(sessionUserDto));
            return sessionMapper.map(sessionRepository.save(new Session(
                null,
                sessionUser,
                Collections.emptyList()
            )));
        } else {
            return sessionMapper.map(sessionRepository.save(new Session(
                null,
                userOpt.get(),
                Collections.emptyList()
            )));
        }
    }

    public SessionDto get(Long sessionId) {
        return sessionMapper.map(sessionRepository.findById(sessionId).orElseThrow());
    }

    public SessionDto addStudent(Long sessionId, SessionUserDto sessionUserDto) {
        var session = sessionRepository.findById(sessionId).orElseThrow();
        session
            .getStudents()
            .add(sessionUserRepository.save(sessionUserMapper.map(sessionUserDto)));
        return sessionMapper.map(sessionRepository.save(session));
    }

    public SessionUserDto addScore(Long userId, Long score) {
        var sessionUser = sessionUserRepository.findById(userId).orElseThrow();
        sessionUser.setScore(score);
        return sessionUserMapper.map(sessionUserRepository.save(sessionUser));
    }

    public SessionDto finish(Long sessionId) {
        var session = sessionRepository.findById(sessionId).orElseThrow();
        var dto = sessionMapper.map(session);
        sessionRepository.delete(session);
        return dto;
    }
}
