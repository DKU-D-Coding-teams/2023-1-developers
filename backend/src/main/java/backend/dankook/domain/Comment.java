package backend.dankook.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    private Profile profile;

    private String content;
    private boolean isSecret;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_comment_id")
    private Comment parentComment;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parentComment", cascade = CascadeType.REMOVE)
    List<Comment> replies = new ArrayList<>();

    public static Comment createComment(
            Profile profile,
            String content,
            boolean isSecret
    ){
        Comment comment = new Comment();
        comment.content = content;
        comment.profile = profile;
        comment.isSecret = isSecret;
        return comment;
    }

    public void updateComment(String content, boolean isSecret){
        this.content = content;
        this.isSecret = isSecret;
    }

    public void addReply(Comment reply){
        this.replies.add(reply);
        reply.parentComment = this;
    }
}
