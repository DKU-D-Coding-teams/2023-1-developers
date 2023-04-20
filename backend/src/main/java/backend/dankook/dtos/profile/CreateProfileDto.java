package backend.dankook.dtos.profile;

import backend.dankook.enums.TagEnum;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateProfileDto {

    @ApiParam(value = "회원 이름", required = true)
    @NotEmpty(message = "이름은 필수 속성 입니다.")
    private String name;
    @ApiParam(value = "회원 소속")
    private String affiliation;
    @ApiParam(value = "학번")
    private String studentId;
    @ApiParam(value = "깃허브 링크")
    private String githubLink;
    @ApiParam(value = "블로그 링크")
    private String blogLink;
    @ApiParam(value = "짧은 자기 소개")
    private String introduce;
    @ApiParam(value = "구체적인 자기 소개")
    private String detailIntroduce;
    @ApiParam(value = "회원 태그들")
    private List<String> tags;
}
