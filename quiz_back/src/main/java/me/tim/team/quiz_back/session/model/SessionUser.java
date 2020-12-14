package me.tim.team.quiz_back.session.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@Table(name = "QUIZ_USER")
@NoArgsConstructor
@AllArgsConstructor
public class SessionUser {

    @Id
    @GeneratedValue(generator = "sessionUserSequenceGenerator")
    @GenericGenerator(
        name = "sessionUserSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator"
    )
    private Long id;

    @ManyToOne
    private Session session;

    private String login;

    private Long score;
}
