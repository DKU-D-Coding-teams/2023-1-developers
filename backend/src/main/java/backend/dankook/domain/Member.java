package backend.dankook.domain;

import backend.dankook.enums.GenderEnum;
import backend.dankook.enums.MemberTypeEnum;
import backend.dankook.enums.RoleEnum;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity implements UserDetails {
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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @Enumerated(EnumType.STRING)
    private RoleEnum role;

    public static Member createMember(String name, String email, String password, MemberTypeEnum memberType, GenderEnum gender){
        Member member = new Member();
        member.name = name;
        member.email = email;
        member.password = password;
        member.memberType = memberType;
        member.gender = gender;
        member.role = RoleEnum.USER;
        return member;
    }

    public void updateProfile(Profile profile){
        this.profile = profile;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        String role = this.getRole().toString();
        authorities.add( ()-> role);
        return authorities;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
