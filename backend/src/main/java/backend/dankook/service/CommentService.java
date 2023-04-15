package backend.dankook.service;

import backend.dankook.domain.Comment;
import backend.dankook.domain.Profile;
import backend.dankook.exception.DankookErrorCode;
import backend.dankook.exception.DankookException;
import backend.dankook.repository.CommentRepository;
import backend.dankook.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentService {
    private final CommentRepository commentRepository;
    private final ProfileRepository profileRepository;

    @Transactional
    public void createComment(String content, Long profileId, boolean isSecret){
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.PROFILE_NOT_FOUND));
        Comment comment = Comment.createComment(profile, content, isSecret);
        commentRepository.save(comment);
    }

    @Transactional
    public void updateComment(String content, boolean isSecret, Long commentId){
        Comment findComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.COMMENT_NOT_FOUND));
        findComment.updateComment(content, isSecret);
    }

    @Transactional
    public void deleteComment(Long commentId){
        Comment deleteComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.COMMENT_NOT_FOUND));
        commentRepository.delete(deleteComment);
    }

    @Transactional
    public void createReply(Long commentId, String content, boolean secret) {
        Comment parentComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new DankookException(DankookErrorCode.COMMENT_NOT_FOUND));

        Comment reply = Comment.createComment(
                parentComment.getProfile(),
                content,
                secret
        );
        parentComment.addReply(reply);

        commentRepository.save(reply);
    }

}
