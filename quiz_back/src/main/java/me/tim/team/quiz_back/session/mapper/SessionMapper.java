package me.tim.team.quiz_back.session.mapper;

import me.tim.team.quiz_back.session.model.Session;
import me.tim.team.quiz_back.session.model.SessionDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = SessionUserMapper.class)
public interface SessionMapper {

    Session map(SessionDto sessionDto);

    SessionDto map(Session sessionDto);
}
