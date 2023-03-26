package backend.dankook.service;

import backend.dankook.domain.Profile;
import backend.dankook.dtos.CreateProfileDto;
import backend.dankook.dtos.ProfileDto;
import backend.dankook.dtos.UpdateProfileDto;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProfileService {
    private final ProfileRepository profileRepository;


    @Transactional
    public Long createProfile(CreateProfileDto createProfileDto) {
        Profile profile = Profile.builder()
                .name(createProfileDto.getName())
                .affiliation(createProfileDto.getAffiliation())
                .studentId(createProfileDto.getStudentId())
                .gitHubLink(createProfileDto.getGithubLink())
                .blogLink(createProfileDto.getBlogLink())
                .introduce(createProfileDto.getIntroduce())
                .detailIntroduce(createProfileDto.getDetailIntroduce())
                .tags(createProfileDto.getTags())
                .build();

        Profile savedProfile = profileRepository.save(profile);
        return savedProfile.getId();
    }

    @Transactional
    public void deleteProfile(Long profileId) {
        Profile deleteProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "존재하지 않는 프로필 입니다."));
        profileRepository.delete(deleteProfile);
    }

    @Transactional
    public void updateProfile(Long profileId, UpdateProfileDto updateProfileDto, MultipartFile multipartFile) {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "존재하지 않는 프로필 입니다."));

        profile.updateProfile(
                updateProfileDto.getAffiliation(),
                updateProfileDto.getStudentId(),
                updateProfileDto.getGithubLink(),
                updateProfileDto.getBlogLink(),
                updateProfileDto.getIntroduce(),
                updateProfileDto.getDetailIntroduce(),
                updateProfileDto.getTags()
        );
    }

    public List<ProfileDto> findAllProfiles() {
        List<Profile> allProfiles = profileRepository.findAll();

        return allProfiles.stream()
                .map((p) -> new ProfileDto(
                        p.getId(),
                        p.getName(),
                        p.getProfileImage().getS3ImagePath(),
                        p.getAffiliation(),
                        p.getStudentId(),
                        p.getGitHubLink(),
                        p.getBlogLink(),
                        p.getIntroduce(),
                        p.getDetailIntroduce(),
                        p.getHits(),
                        p.getTags()))
                .collect(Collectors.toList());
    }

    public ProfileDto findById(Long profileId) {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException("존재하지 않는 프로필 입니다."));
        return new ProfileDto(
                profile.getId(),
                profile.getName(),
                profile.getProfileImage().getS3ImagePath(),
                profile.getAffiliation(),
                profile.getStudentId(),
                profile.getGitHubLink(),
                profile.getBlogLink(),
                profile.getIntroduce(),
                profile.getDetailIntroduce(),
                profile.getHits(),
                profile.getTags()
        );
    }

    @Transactional
    public ProfileDto searchProfileDetails(Long profileId){
        Profile searchProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException("존재하지 않는 프로필 입니다."));
        searchProfile.increaseProfileHits();
        return new ProfileDto(
                searchProfile.getId(),
                searchProfile.getName(),
                searchProfile.getProfileImage().getS3ImagePath(),
                searchProfile.getAffiliation(),
                searchProfile.getStudentId(),
                searchProfile.getGitHubLink(),
                searchProfile.getBlogLink(),
                searchProfile.getIntroduce(),
                searchProfile.getDetailIntroduce(),
                searchProfile.getHits(),
                searchProfile.getTags()
        );
    }
}
