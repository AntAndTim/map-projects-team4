package me.tim.team.quiz_back.session.model;

import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SessionDto {

    private Long id;

    private SessionUser teacher;

    private List<SessionUserDto> students;
}
