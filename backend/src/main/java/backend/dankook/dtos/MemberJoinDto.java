package backend.dankook.dtos;

import backend.dankook.enums.GenderEnum;
import backend.dankook.enums.MemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberJoinDto {
    private String name;
    private String email;
    private String password;
    private MemberTypeEnum memberType;
    private GenderEnum gender;
}
