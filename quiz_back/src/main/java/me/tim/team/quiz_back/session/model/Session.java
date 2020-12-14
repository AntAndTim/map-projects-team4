package me.tim.team.quiz_back.session.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Session {

    @Id
    @GeneratedValue(generator = "sessionSequenceGenerator")
    @GenericGenerator(
        name = "sessionSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator"
    )
    private Long id;

    @ManyToOne
    private SessionUser teacher;

    @OneToMany
    private List<SessionUser> students;
}
