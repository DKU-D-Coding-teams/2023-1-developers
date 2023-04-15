package backend.dankook.dtos.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentDto {
    private Long id;
    private String content;
    private boolean isSecret;
}
