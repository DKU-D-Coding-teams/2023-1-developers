package backend.dankook.service;

import backend.dankook.domain.Profile;
import backend.dankook.domain.ProfileImage;
import backend.dankook.exception.DankookErrorCode;
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
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));

        ProfileImage profileImage = ProfileImage.createProfileImage(s3ImagePath, originalFileName, findProfile);
        profileImageRepository.save(profileImage);
    }

    @Transactional
    public void update(Long profileId, String s3ImagePath, String originalFileName){
        ProfileImage updateProfileImage = profileImageRepository.findByProfileId(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_IMAGE_NOT_FOUND));
        Profile updateProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
        updateProfileImage.updateProfileImage(s3ImagePath, originalFileName, updateProfile);
    }
}
