package backend.dankook.dtos.member;

import backend.dankook.enums.GenderEnum;
import backend.dankook.enums.MemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberJoinDto {
    @NotEmpty(message = "이름은 필수 속성 입니다.")
    private String name;
    @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "이메일 형식에 맞지 않습니다.")
    private String email;

    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%*^&+=]).{8,20}$", message = "비밀번호는 8자리 이상 영문자와 특수문자를 포함해야 합니다.")
    private String password;

    @NotNull(message = "유저 타입은 필수 속성 입니다.")
    private MemberTypeEnum memberType;

    @NotNull(message = "성별은 필수 속성 입니다.")
    private GenderEnum gender;
}
