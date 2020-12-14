package me.tim.team.quiz_back.session.mapper;

import me.tim.team.quiz_back.session.model.SessionUser;
import me.tim.team.quiz_back.session.model.SessionUserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SessionUserMapper {

    @Mapping(target = "session", ignore = true)
    SessionUser map(SessionUserDto sessionDto);

    SessionUserDto map(SessionUser sessionDto);
}
