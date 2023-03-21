package backend.dankook.domain;

import backend.dankook.enums.TagEnum;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

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
    private String gitHubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private int hits;

    @Enumerated(EnumType.STRING)
    private List<TagEnum> tags = new ArrayList<>();

    @Builder
    public Profile(
            @NotEmpty String name,
            String affiliation,
            String studentId,
            String gitHubLink,
            String blogLink,
            String introduce,
            String detailIntroduce,
            List<TagEnum> tags
    ) {
        this.name = name;
        this.affiliation = affiliation;
        this.studentId = studentId;
        this.gitHubLink = gitHubLink;
        this.blogLink = blogLink;
        this.introduce = introduce;
        this.detailIntroduce = detailIntroduce;
        this.hits = 0;
        this.tags.addAll(tags);
    }

    public void updateProfile(
            String affiliation,
            String studentId,
            String gitHubLink,
            String blogLink,
            String introduce,
            String detailIntroduce,
            List<TagEnum> tags
    ){
        this.affiliation = affiliation;
        this.studentId = studentId;
        this.gitHubLink = gitHubLink;
        this.blogLink = blogLink;
        this.introduce = introduce;
        this.detailIntroduce = detailIntroduce;
        this.tags.clear();
        this.tags.addAll(tags);
    }
}
