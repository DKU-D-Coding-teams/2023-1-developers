package backend.dankook.controller;

import backend.dankook.domain.Member;
import backend.dankook.dtos.CreateProfileDto;
import backend.dankook.dtos.ProfileDto;
import backend.dankook.dtos.UpdateProfileDto;
import backend.dankook.security.AuthenticationProvider;
import backend.dankook.service.ProfileImageService;
import backend.dankook.service.ProfileService;
import backend.dankook.service.S3Service;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class ProfileController {
    private final ProfileService profileService;
    private final S3Service s3Service;
    private final ProfileImageService profileImageService;

    @ApiOperation(value = "프로필 작성", notes = "프로필 이미지와, 프로필 내용을 입력받아 프로필을 작성한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "프로필 작성 정상 작동"),
            @ApiResponse(code = 401, message = "S3 Access Denied"),
            @ApiResponse(code = 400, message = "프로필이 존재하지 않음")
    })
    @PostMapping("/new")
    public ResponseEntity<String> createProfile(
            @RequestPart("images") MultipartFile multipartFile,
            @RequestPart("profile") @Valid CreateProfileDto createProfileDto
    ){
        Member currentMember = AuthenticationProvider.getCurrentMember();
        Long profileId = profileService.createProfile(createProfileDto);
        String s3ImagePath = s3Service.uploadFile(multipartFile, currentMember.getEmail(), "profile");
        profileImageService.save(profileId, s3ImagePath, multipartFile.getOriginalFilename());

        return ResponseEntity.ok()
                .body("프로필 등록 성공");
    }

    @ApiOperation(value = "프로필 수정", notes = "프로필 수정을 진행합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "프로필 수정 정상 작동"),
            @ApiResponse(code = 401, message = "S3 Access Denied"),
            @ApiResponse(code = 400, message = "프로필 이미지 또는 프로필이 존재하지 않음.")
    })
    @PostMapping("/update/{profileId}")
    public ResponseEntity<String> updateProfile(
            @PathVariable Long profileId,
            @RequestPart("profile") UpdateProfileDto updateProfileDto,
            @RequestPart("images") MultipartFile multipartFile
    ){
        Member currentMember = AuthenticationProvider.getCurrentMember();
        String s3ImagePath = s3Service.uploadFile(multipartFile, currentMember.getEmail(), "profile");
        profileImageService.update(profileId, s3ImagePath, multipartFile.getOriginalFilename());
        profileService.updateProfile(profileId, updateProfileDto, multipartFile);
        return ResponseEntity.ok()
                .body("프로필 수정 성공");
    }

    @ApiOperation(value = "프로필 삭제", notes = "프로필 삭제를 진행합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "프로필 삭제 정상 작동"),
            @ApiResponse(code = 400, message = "프로필이 존재하지 않음.")
    })
    @PostMapping("/delete/{profileId}")
    public ResponseEntity<String> deleteProfile(@PathVariable Long profileId){
        profileService.deleteProfile(profileId);
        return ResponseEntity.ok()
                .body("프로필 삭제 성공");
    }

    @ApiOperation(value = "모든 프로필 검색", notes = "모든 회원의 프로필을 검색합니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "모든 프로필 검색 정상 작동"),
    })
    @GetMapping("/search/all")
    public ResponseEntity<List<ProfileDto>> searchAllProfiles(){
        List<ProfileDto> allProfiles = profileService.findAllProfiles();
        return ResponseEntity.ok()
                .body(allProfiles);
    }

    @ApiOperation(value = "특정 프로필 세부 검색", notes = "특정 프로필을 눌렀을 때, 프로필의 세부정보들이 나옵니다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "프로필 세부 검색 정상 작동"),
    })
    @GetMapping("/details/{profileId}")
    public ResponseEntity<ProfileDto> searchById(@PathVariable Long profileId){
        ProfileDto findProfile = profileService.searchProfileDetails(profileId);
        return ResponseEntity.ok()
                .body(findProfile);
    }


}
