package backend.dankook.dtos;

import backend.dankook.enums.TagEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@AllArgsConstructor
public class CreateProfileDto {
    @NotEmpty(message = "이름은 필수 속성 입니다.")
    private String name;
    private String affiliation;
    private String studentId;
    private String githubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private List<TagEnum> tags;
}
