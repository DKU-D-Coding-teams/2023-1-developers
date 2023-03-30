package backend.dankook.security;

import backend.dankook.exception.DankookErrorCode;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByEmail(username)
                .map(UserDetailsImpl::new)
                .orElseThrow(() -> new DankookException(DankookErrorCode.MEMBER_NOT_FOUND));
    }
}
