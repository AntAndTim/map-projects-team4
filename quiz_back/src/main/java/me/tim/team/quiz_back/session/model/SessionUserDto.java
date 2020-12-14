package me.tim.team.quiz_back.session.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SessionUserDto {

    private Long id;

    private String login;

    private Long score;
}
