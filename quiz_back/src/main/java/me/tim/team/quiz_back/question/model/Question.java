package me.tim.team.quiz_back.question.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(generator = "questionSequenceGenerator")
    @GenericGenerator(
        name = "questionSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator"
    )
    private Long id;
    private String text;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<Answer> answers;
}
