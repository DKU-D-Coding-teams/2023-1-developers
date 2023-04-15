package backend.dankook.dtos.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ParentCommentDto {
    private Long id;
    private String author;
    private String content;
    private boolean isSecret;
    private List<ReplyDto> replies;
}
