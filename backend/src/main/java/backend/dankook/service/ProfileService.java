package backend.dankook.service;

import backend.dankook.domain.Comment;
import backend.dankook.domain.Member;
import backend.dankook.domain.Profile;
import backend.dankook.domain.Tag;
import backend.dankook.dtos.comment.ParentCommentDto;
import backend.dankook.dtos.profile.CreateProfileDto;
import backend.dankook.dtos.profile.DetailsProfileDto;
import backend.dankook.dtos.profile.ProfileDto;
import backend.dankook.dtos.comment.ReplyDto;
import backend.dankook.dtos.profile.UpdateProfileDto;
import backend.dankook.dtos.tag.TagDto;
import backend.dankook.exception.DankookErrorCode;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.CommentRepository;
import backend.dankook.repository.MemberRepository;
import backend.dankook.repository.ProfileRepository;
import backend.dankook.repository.TagRepository;
import backend.dankook.security.AuthenticationProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProfileService {
    private final ProfileRepository profileRepository;
    private final TagRepository tagRepository;
    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;


    @Transactional
    public Long createProfile(CreateProfileDto createProfileDto) {
        Long currentMemberId = AuthenticationProvider.getCurrentMemberId();
        Member member = memberRepository.findById(currentMemberId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.MEMBER_NOT_FOUND));

        Profile profile = Profile.builder()
                .member(member)
                .affiliation(createProfileDto.getAffiliation())
                .studentId(createProfileDto.getStudentId())
                .gitHubLink(createProfileDto.getGithubLink())
                .blogLink(createProfileDto.getBlogLink())
                .introduce(createProfileDto.getIntroduce())
                .detailIntroduce(createProfileDto.getDetailIntroduce())
                .build();

        Profile savedProfile = profileRepository.save(profile);
        createProfileDto.getTags().forEach(t -> {
            Tag tag = Tag.createTag(t, profile);
            tagRepository.save(tag);
        });

        return savedProfile.getId();
    }

    @Transactional
    public void deleteProfile(Long profileId) {
        Profile deleteProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
        profileRepository.delete(deleteProfile);
    }

    @Transactional
    public void updateProfile(Long profileId, UpdateProfileDto updateProfileDto, MultipartFile multipartFile) {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
        List<Tag> updateTags = tagRepository.findByProfileId(profileId);

        updateTags.forEach(tagRepository::delete);

        profile.updateProfile(
                updateProfileDto.getAffiliation(),
                updateProfileDto.getStudentId(),
                updateProfileDto.getGithubLink(),
                updateProfileDto.getBlogLink(),
                updateProfileDto.getIntroduce(),
                updateProfileDto.getDetailIntroduce()
        );

        updateProfileDto.getTags().forEach(t -> {
            Tag tag = Tag.createTag(t, profile);
            tagRepository.save(tag);
        });
    }

    public List<ProfileDto> findAllProfiles() {
        List<Tag> tags = new ArrayList<>();
        List<Profile> allProfiles = profileRepository.findAll();

        return allProfiles.stream()
                .map((p) -> new ProfileDto(
                        p.getId(),
                        p.getName(),
                        p.getProfileImage() != null ? p.getProfileImage().getS3ImagePath() : "",
                        p.getAffiliation(),
                        p.getStudentId(),
                        p.getGitHubLink(),
                        p.getBlogLink(),
                        p.getIntroduce(),
                        p.getDetailIntroduce(),
                        p.getHits(),
                        tagRepository.findByProfileId(p.getId()).stream()
                                .map(t -> new TagDto(t.getTagName()))
                                .collect(Collectors.toList())
                        ))
                .collect(Collectors.toList());
    }

    public ProfileDto findById(Long profileId) {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
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
                tagRepository.findByProfileId(profile.getId()).stream()
                        .map(t -> new TagDto(t.getTagName()))
                        .collect(Collectors.toList())
        );
    }

    @Transactional
    public DetailsProfileDto searchProfileDetails(Long profileId){
        Profile searchProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
        searchProfile.increaseProfileHits();

        List<Comment> comments = commentRepository.findByProfileId(profileId);

        return new DetailsProfileDto(
                searchProfile.getId(),
                searchProfile.getName(),
                searchProfile.getProfileImage() != null ? searchProfile.getProfileImage().getS3ImagePath() : "",
                searchProfile.getAffiliation(),
                searchProfile.getStudentId(),
                searchProfile.getGitHubLink(),
                searchProfile.getBlogLink(),
                searchProfile.getIntroduce(),
                searchProfile.getDetailIntroduce(),
                searchProfile.getHits(),
                tagRepository.findByProfileId(searchProfile.getId()).stream()
                        .map(t -> new TagDto(t.getTagName()))
                        .collect(Collectors.toList()),
                comments.stream()
                        .filter(c -> c.getParentComment() == null)
                        .map(c -> new ParentCommentDto(
                                c.getId(),
                                c.getMember().getName(),
                                c.getContent(),
                                c.isSecret(),
                                c.getReplies().stream()
                                        .map(r -> new ReplyDto(r.getId(), r.getMember().getName(), r.getContent()))
                                        .collect(Collectors.toList())

                        ))
                        .collect(Collectors.toList())
        );
    }
}
