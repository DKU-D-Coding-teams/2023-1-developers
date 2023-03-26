package backend.dankook.dtos;

import backend.dankook.enums.TagEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ProfileDto {
    private Long id;
    private String name;
    private String s3ImagePath;
    private String affiliation;
    private String studentId;
    private String gitHubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private int hits;
    private List<TagEnum> tags;
}
