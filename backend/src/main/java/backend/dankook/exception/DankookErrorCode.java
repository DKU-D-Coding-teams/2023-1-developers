package backend.dankook.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum DankookErrorCode {
    // Common
    REFRESH_TOKEN_NOT_FOUND(400, "리프레시 토큰이 존재하지 않습니다.", "C001"),
    S3_ACCESS_DENIED(401, "AWS S3 Storage 접근에 실패하였습니다.", "C002"),
    UNAUTHORIZED_TOKEN(401, "권한 정보가 없는 토큰 입니다.", "C003"),
    INVALID_TOKEN(401, "유효하지 않은 토큰 입니다.", "C004"),
    UNSUPPORTED_TOKEN(401, "지원하지 않는 토큰 입니다.", "C005"),
    EMPTY_CLAIM_TOKEN(400, "클레임이 비어있는 토큰 입니다.", "C006"),
    EXPIRED_TOKEN(400, "만료된 토큰 입니다.", "C007"),

    // Member
    MEMBER_NOT_FOUND(400, "회원이 존재하지 않습니다.", "M001"),
    MEMBER_EMAIL_DUPLICATE(403, "중복된 이메일이 존재합니다.", "M002"),

    // Profile
    PROFILE_NOT_FOUND(400, "프로필이 존재하지 않습니다.", "P001"),

    // Profile Image
    PROFILE_IMAGE_NOT_FOUND(400, "프로필 이미지가 존재하지 않습니다.", "I001"),

    // Comment
    COMMENT_NOT_FOUND(400, "댓글이 존재하지 않습니다.", "E001"),

    // Tag
    TAG_NOT_FOUND(400, "태그가 존재하지 않습니다.", "T001")
    ;

    private final int status;
    private final String message;
    private final String code;

}
