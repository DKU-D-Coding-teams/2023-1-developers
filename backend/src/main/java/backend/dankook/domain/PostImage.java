package backend.dankook.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostImage extends BaseEntity{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_image_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    private String s3ImagePath;
    private String originalFileName;

    public static void createPostImage(
            String s3ImagePath,
            String originalFileName,
            Post post
    ){
        PostImage postImage = new PostImage();
        postImage.s3ImagePath = s3ImagePath;
        postImage.originalFileName = originalFileName;
        postImage.post = post;
    }
}
