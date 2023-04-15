package backend.dankook.dtos.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ReplyDto {
    private Long id;
    private String author;
    private String content;
}
