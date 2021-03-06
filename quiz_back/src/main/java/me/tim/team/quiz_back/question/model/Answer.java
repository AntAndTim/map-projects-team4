package me.tim.team.quiz_back.question.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(generator = "answerSequenceGenerator")
    @GenericGenerator(
        name = "answerSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator"
    )
    private Long id;
    private String text;
    private boolean correct;
}
