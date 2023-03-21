package backend.dankook.dtos;

import backend.dankook.enums.TagEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;


@Getter
@AllArgsConstructor
public class UpdateProfileDto {

    private String affiliation;
    private String studentId;
    private String githubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private List<TagEnum> tags;


}
