package backend.dankook.dtos.profile;

import backend.dankook.dtos.comment.ParentCommentDto;
import backend.dankook.dtos.tag.TagDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class DetailsProfileDto {
    private Long id;
    private String name;
    private String s3ImagePath;
    private String affiliation;
    private String studentId;
    private String gitHubLink;
    private String blogLink;
    private String introduce;
    private String detailIntroduce;
    private int hits;
    private List<TagDto> tags;
    private List<ParentCommentDto> comments;
}
