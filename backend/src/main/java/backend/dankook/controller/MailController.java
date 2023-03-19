package backend.dankook.controller;

import backend.dankook.dtos.MailDto;
import backend.dankook.dtos.ResponseDto;
import backend.dankook.service.MailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MailController {
    private final MailService mailService;
    @PostMapping("/members/mailCheck")
    public ResponseDto<?> mailConfirm(@RequestBody MailDto mailDto) throws Exception {
        String email = mailDto.getEmail();
        String code = mailService.sendSimpleMessage(email);
        log.info("인증코드 : "+code);
        return new ResponseDto<>(HttpStatus.OK.value(), code);
    }
}