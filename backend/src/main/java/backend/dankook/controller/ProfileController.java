package backend.dankook.controller;

import backend.dankook.dtos.CreateProfileDto;
import backend.dankook.dtos.ProfileDto;
import backend.dankook.dtos.UpdateProfileDto;
import backend.dankook.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class ProfileController {
    private final ProfileService profileService;

    @PostMapping("/new")
    public ResponseEntity<String> createProfile(@RequestBody CreateProfileDto createProfileDto){
        profileService.createProfile(createProfileDto);
        return ResponseEntity.ok()
                .body("프로필 등록 성공");
    }

    @PostMapping("/update/{profileId}")
    public ResponseEntity<String> updateProfile(
            @PathVariable Long profileId,
            @RequestBody UpdateProfileDto updateProfileDto
    ){
        profileService.updateProfile(profileId, updateProfileDto);
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
        ProfileDto findProfile = profileService.findById(profileId);
        return ResponseEntity.ok()
                .body(findProfile);
    }


}
