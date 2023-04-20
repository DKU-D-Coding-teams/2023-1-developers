package backend.dankook.dtos.profile;

import backend.dankook.enums.TagEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProfileDto {

    private String affiliation;
    private String studentId;
    private String githubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private List<String> tags;


}
