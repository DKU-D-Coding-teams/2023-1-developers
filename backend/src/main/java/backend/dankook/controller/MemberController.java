package backend.dankook.controller;

import backend.dankook.dtos.MemberJoinDto;
import backend.dankook.dtos.MemberLoginDto;
import backend.dankook.dtos.TokenInfo;
import backend.dankook.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody MemberJoinDto memberJoinDto){
        memberService.join(
                memberJoinDto.getName(),
                memberJoinDto.getEmail(),
                memberJoinDto.getPassword(),
                memberJoinDto.getMemberType(),
                memberJoinDto.getGender()
        );
        return new ResponseEntity<>("회원가입 성공", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenInfo> login(@RequestBody MemberLoginDto memberLoginDto){
        TokenInfo tokenInfo = memberService.login(
                memberLoginDto.getEmail(),
                memberLoginDto.getPassword()
        );
        return new ResponseEntity<>(tokenInfo, HttpStatus.OK);

    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(){
        return new ResponseEntity<>(memberService.logout(), HttpStatus.OK);
    }

}
