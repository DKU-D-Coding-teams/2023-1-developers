package backend.dankook.controller;

import backend.dankook.dtos.member.MemberJoinDto;
import backend.dankook.dtos.member.MemberLoginDto;
import backend.dankook.dtos.TokenInfo;
import backend.dankook.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Api(tags = {"회원 API Test"})
public class MemberController {
    private final MemberService memberService;

    @ApiOperation(value = "회원 가입", notes = "이름, 이메일, 비밀번호, 회원 유형, 성별을 입력받아 회원가입을 진행합니다.")
    @ApiResponses({
      @ApiResponse(code = 200, message = "회원가입 정상 작동"),
      @ApiResponse(code = 403, message = "중복 회원 존재"),
    })
    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody @Valid MemberJoinDto memberJoinDto){
        memberService.join(
                memberJoinDto.getName(),
                memberJoinDto.getEmail(),
                memberJoinDto.getPassword(),
                memberJoinDto.getMemberType(),
                memberJoinDto.getGender()
        );
        return new ResponseEntity<>("회원가입 성공", HttpStatus.OK);
    }

    @ApiOperation(value = "로그인", notes = "이메일, 비밀번호를 통해 로그인을 진행합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "로그인 정상 작동"),
    })
    @PostMapping("/login")
    public ResponseEntity<TokenInfo> login(@RequestBody MemberLoginDto memberLoginDto){
        TokenInfo tokenInfo = memberService.login(
                memberLoginDto.getEmail(),
                memberLoginDto.getPassword()
        );
        return new ResponseEntity<>(tokenInfo, HttpStatus.OK);

    }

    @ApiOperation(value = "로그아웃", notes = "로그아웃을 진행합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "로그아웃 정상 작동"),
            @ApiResponse(code = 400, message = "RefreshToken이 존재하지 않음")
    })
    @PostMapping("/logout")
    public ResponseEntity<String> logout(){
        return new ResponseEntity<>(memberService.logout(), HttpStatus.OK);
    }

}
