package backend.dankook.service;

import backend.dankook.domain.Member;
import backend.dankook.domain.RefreshToken;
import backend.dankook.dtos.TokenInfo;
import backend.dankook.enums.GenderEnum;
import backend.dankook.enums.MemberTypeEnum;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.MemberRepository;
import backend.dankook.repository.RefreshTokenRepository;
import backend.dankook.security.AuthenticationProvider;
import backend.dankook.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public void join(String name, String email, String password, MemberTypeEnum memberType, GenderEnum gender) {

        if(memberRepository.findByEmail(email).isPresent()){
            throw new DankookException(HttpStatus.CONFLICT, "This email is already exists.");
        }

        Member member = createMemberAfterPasswordEncoding(name, email, password, memberType, gender);

        memberRepository.save(member);
    }

    private Member createMemberAfterPasswordEncoding(String name, String email, String password, MemberTypeEnum memberType, GenderEnum gender) {
        return Member.createMember(
                name,
                email,
                passwordEncoder.encode(password),
                memberType,
                gender
        );
    }

    public TokenInfo login(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        return jwtTokenProvider.generateToken(authentication);
    }

    public String logout() {
        Member logoutMember = AuthenticationProvider.getCurrentMember();
        String logoutEmail = logoutMember.getEmail();

        RefreshToken logoutRefreshToken = refreshTokenRepository.findById(logoutEmail)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "해당 회원의 refreshToken이 존재하지 않습니다."));

        refreshTokenRepository.delete(logoutRefreshToken);

        return "로그아웃 성공";
    }
}
