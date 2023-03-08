package backend.dankook.domain;

import backend.dankook.enums.TagEnum;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Profile extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    private Long id;

    private String name;
    private String affiliation;
    private String studentId;
    private String link;
    private String singleIntroduce;
    private String freeIntroduce;

    @Enumerated(EnumType.STRING)
    private TagEnum tag;

    public static Profile createProfile(String name, String affiliation, String studentId, String link, String singleIntroduce, String freeIntroduce){
        Profile profile = new Profile();
        profile.name = name;
        profile.affiliation = affiliation;
        profile.studentId = studentId;
        profile.link = link;
        profile.singleIntroduce = singleIntroduce;
        profile.freeIntroduce = freeIntroduce;
        return profile;
    }
}
