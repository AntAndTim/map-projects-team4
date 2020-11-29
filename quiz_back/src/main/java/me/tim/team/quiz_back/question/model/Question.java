package me.tim.team.quiz_back.question.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue
    private Long id;
    private String text;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<Answer> answers;
}
