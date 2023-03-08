package backend.dankook.security;

import backend.dankook.domain.Member;
import lombok.Getter;
import org.springframework.security.core.userdetails.User;

@Getter
public class UserDetailsImpl extends User {

    private Member member;

    public UserDetailsImpl(Member member){
        super(member.getEmail(), member.getPassword(), member.getAuthorities());
        this.member = member;
    }
}
