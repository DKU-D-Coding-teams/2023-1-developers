package backend.dankook.security;

import backend.dankook.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;

@RequiredArgsConstructor
public class AuthenticationProvider {

    public static Member getCurrentMember(){
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getMember();
    }

    public static Long getCurrentMemberId(){
        return getCurrentMember().getId();
    }
}
