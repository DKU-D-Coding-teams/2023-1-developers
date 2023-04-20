package backend.dankook.controller;

import backend.dankook.dtos.comment.CreateCommentDto;
import backend.dankook.dtos.comment.ReplyDto;
import backend.dankook.service.CommentService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
@CrossOrigin(origins = "*")
public class CommentController {

    private final CommentService commentService;

    @ApiOperation(value = "댓글 작성", notes = "PathVariable로 profileId를 전달하고 댓글 내용을 작성하여 댓글 작성을 진행한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "댓글 작성 정상 작동"),
            @ApiResponse(code = 400, message = "프로필 존재하지 않음")
    })
    @PostMapping("/new/{profileId}")
    public ResponseEntity<Void> createComment(@PathVariable Long profileId, @RequestBody CreateCommentDto commentDto){
        commentService.createComment(
                commentDto.getContent(),
                profileId,
                commentDto.isSecret()
        );
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @ApiOperation(value = "댓글 수정", notes = "PathVariable로 commentId 전달하고 수정할 댓글 내용을 전달하여 댓글 수정 진행한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "댓글 수정 정상 작동"),
            @ApiResponse(code = 400, message = "댓글 존재하지 않음")
    })
    @PostMapping("/update/{commentId}")
    public ResponseEntity<Void> updateComment(@PathVariable Long commentId, @RequestBody CreateCommentDto commentDto){
        commentService.updateComment(
                commentDto.getContent(),
                commentDto.isSecret(),
                commentId
        );
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @ApiOperation(value = "댓글 삭제", notes = "PathVariable로 commentId를 전달하고 해당 댓글 삭제를 진행한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "댓글 삭제 정상 작동"),
            @ApiResponse(code = 400, message = "해당 댓글 존재하지 않음")
    })
    @PostMapping("/delete/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId){
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @ApiOperation(value = "대댓글 작성", notes = "PathVariable로 Parent CommentId 전달하고 대댓글 내용을 작성하여 대댓글 작성을 진행한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "대댓글 작성 정상 작동"),
            @ApiResponse(code = 400, message = "Parent 댓글 존재하지 않음")
    })
    @PostMapping("/reply/new/{commentId}")
    public ResponseEntity<Void> createReply(@PathVariable Long commentId, @RequestBody CreateCommentDto replyDto){
        commentService.createReply(commentId, replyDto.getContent(), replyDto.isSecret());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
