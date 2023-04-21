package backend.dankook.dtos.profile;

import backend.dankook.dtos.tag.TagDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {
    private Long id;
    private Long authorId;
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
}
