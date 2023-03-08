package backend.dankook.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileImage extends BaseEntity{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_image_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    private Profile profile;

    private String s3ImagePath;
    private String originalFileName;

    public static ProfileImage createProfileImage(String s3ImagePath, String originalFileName, Profile profile){
        ProfileImage profileImage = new ProfileImage();
        profileImage.s3ImagePath = s3ImagePath;
        profileImage.originalFileName = originalFileName;
        profileImage.profile = profile;
        return profileImage;
    }
}
