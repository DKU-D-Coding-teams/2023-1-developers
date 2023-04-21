package backend.dankook.domain;

import backend.dankook.enums.GenderEnum;
import backend.dankook.enums.MemberTypeEnum;
import backend.dankook.enums.RoleEnum;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private MemberTypeEnum memberType;
    @Enumerated(EnumType.STRING)
    private GenderEnum gender;

    @Enumerated(EnumType.STRING)
    private RoleEnum role;

    @Builder
    public Member(
            @NotEmpty String name,
            @NotEmpty String email,
            @NotEmpty String password,
            @NotEmpty MemberTypeEnum memberType,
            @NotEmpty GenderEnum gender
    ){
        this.name = name;
        this.email = email;
        this.password = password;
        this.memberType = memberType;
        this.gender = gender;
        this.role = RoleEnum.USER;
    }

    public void updateName(String name){
        this.name = name;
    }
}
