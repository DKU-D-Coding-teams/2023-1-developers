package backend.dankook.service;

import backend.dankook.domain.Profile;
import backend.dankook.domain.ProfileImage;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.ProfileImageRepository;
import backend.dankook.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProfileImageService {
    private final ProfileImageRepository profileImageRepository;
    private final ProfileRepository profileRepository;


    @Transactional
    public void save(Long profileId, String s3ImagePath, String originalFileName){
        Profile findProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "존재하지 않는 프로필 입니다."));

        ProfileImage profileImage = ProfileImage.createProfileImage(s3ImagePath, originalFileName, findProfile);
        profileImageRepository.save(profileImage);
    }

    @Transactional
    public void update(Long profileId, String s3ImagePath, String originalFileName){
        ProfileImage updateProfileImage = profileImageRepository.findByProfileId(profileId)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "프로필 이미지가 존재하지 않습니다."));
        Profile updateProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(HttpStatus.NOT_FOUND, "프로필이 존재하지 않습니다."));
        updateProfileImage.updateProfileImage(s3ImagePath, originalFileName, updateProfile);
    }
}
