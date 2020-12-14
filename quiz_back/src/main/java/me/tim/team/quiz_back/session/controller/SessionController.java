package me.tim.team.quiz_back.session.controller;

import me.tim.team.quiz_back.session.model.SessionDto;
import me.tim.team.quiz_back.session.model.SessionUserDto;
import me.tim.team.quiz_back.session.service.SessionService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/session")
public class SessionController {

    private final SessionService sessionService;

    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping
    public SessionDto create(@RequestBody SessionUserDto sessionUserDto) {
        return sessionService.create(sessionUserDto);
    }

    @GetMapping("/{sessionId}")
    public SessionDto get(@PathVariable Long sessionId) {
        return sessionService.get(sessionId);
    }

    @PutMapping("/{sessionId}/student")
    public SessionDto addStudent(
        @PathVariable Long sessionId,
        @RequestBody SessionUserDto sessionUserDto
    ) {
        return sessionService.addStudent(sessionId, sessionUserDto);
    }

    @PutMapping("/score/{userId}")
    public SessionUserDto addScore(@PathVariable Long userId, Long score) {
        return sessionService.addScore(userId, score);
    }

    @DeleteMapping("/{sessionId}")
    public SessionDto finish(@PathVariable Long sessionId) {
        return sessionService.finish(sessionId);
    }
}
