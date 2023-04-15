package backend.dankook.dtos.comment;

import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateCommentDto {
    @ApiParam(value = "(대)댓글 내용", required = true)
    private String content;
    @ApiParam(value = "비밀댓글 여부", required = true)
    private boolean isSecret;
}
