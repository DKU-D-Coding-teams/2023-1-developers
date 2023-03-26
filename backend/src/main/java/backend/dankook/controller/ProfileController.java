package backend.dankook.controller;

import backend.dankook.domain.Member;
import backend.dankook.dtos.CreateProfileDto;
import backend.dankook.dtos.ProfileDto;
import backend.dankook.dtos.UpdateProfileDto;
import backend.dankook.security.AuthenticationProvider;
import backend.dankook.service.ProfileImageService;
import backend.dankook.service.ProfileService;
import backend.dankook.service.S3Service;
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

    @PostMapping("/delete/{profileId}")
    public ResponseEntity<String> deleteProfile(@PathVariable Long profileId){
        profileService.deleteProfile(profileId);
        return ResponseEntity.ok()
                .body("프로필 삭제 성공");
    }

    @GetMapping("/search/all")
    public ResponseEntity<List<ProfileDto>> searchAllProfiles(){
        List<ProfileDto> allProfiles = profileService.findAllProfiles();
        return ResponseEntity.ok()
                .body(allProfiles);
    }

    @GetMapping("/details/{profileId}")
    public ResponseEntity<ProfileDto> searchById(@PathVariable Long profileId){
        ProfileDto findProfile = profileService.searchProfileDetails(profileId);
        return ResponseEntity.ok()
                .body(findProfile);
    }


}
