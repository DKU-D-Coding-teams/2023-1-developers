package backend.dankook.dtos.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Pattern;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberLoginDto {
    @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "이메일 형식에 맞지 않습니다.")
    private String email;

    @Pattern(regexp = "\"^.*(?=^.{8,}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%*^&+=]).*$\"", message = "비밀번호는 8자리 이상 영문자와 특수문자를 포함해야 합니다.")
    private String password;
}
