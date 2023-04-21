import { Comment, LoginToken, postDeleteComment, postNewComment, postReplyComment } from 'api';
import { useState } from 'react';
import { loginTokenStorage } from 'storage';
import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';

interface Props {
  comments: Comment[];
  profileId: number;
}

export default function Comments({ comments, profileId }: Props) {
  const loginToken = useReadLocalStorage<LoginToken>(loginTokenStorage.key);
  const [commentInput, setCommentInput] = useState('');
  const [isReplyMode, setReplyMode] = useState(false);
  const [replyTargetCommentId, setReplyTargetCommentId] = useState<number>();

  const handleReplyButton = (commentId: number) => {
    if (isReplyMode) {
      setReplyMode(false);
      return;
    }

    setReplyMode(true);
    setReplyTargetCommentId(commentId);
  };

  const submitComment = () => {
    if (isReplyMode) {
      postReplyComment(replyTargetCommentId, commentInput, loginToken).then((res) => {
        console.log(res);
        window.location.reload();
      });
      return;
    }

    postNewComment(profileId, commentInput, loginToken).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  const deleteComment = (commentId: number) => {
    postDeleteComment(commentId, loginToken).then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentWithReplies key={comment.id}>
          <CommentBox>
            <Author>{comment.author}</Author>
            <div>{comment.content}</div>
            <ReplyButton onClick={() => handleReplyButton(comment.id)}>답글 작성...</ReplyButton>
            {loginToken && loginToken.memberId === comment.authorId && (
              <DeleteButton onClick={() => deleteComment(comment.id)}>삭제</DeleteButton>
            )}
          </CommentBox>
          {isReplyMode && comment.id === replyTargetCommentId && (
            <CommentInputContainer>
              <div>└ 답글 쓰기</div>
              <CommentInput placeholder="내용" onChange={(e) => setCommentInput(e.target.value)} />
              <CommentSubmitButton onClick={submitComment}>작성</CommentSubmitButton>
            </CommentInputContainer>
          )}
          {comment.replies.map((reply) => (
            <CommentBox marginLeft="100px" bgcolor="#7289DA" key={reply.id}>
              <Author>{reply.author}</Author>
              <div>{reply.content}</div>
              <div></div>
              {loginToken && loginToken.memberId === comment.authorId && (
                <DeleteButton onClick={() => deleteComment(comment.id)}>삭제</DeleteButton>
              )}
            </CommentBox>
          ))}
        </CommentWithReplies>
      ))}
      {!isReplyMode && loginToken && (
        <CommentInputContainer>
          <div>댓글 쓰기</div>
          <CommentInput placeholder="내용" onChange={(e) => setCommentInput(e.target.value)} />
          <CommentSubmitButton onClick={submitComment}>작성</CommentSubmitButton>
        </CommentInputContainer>
      )}
    </>
  );
}

const DeleteButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;

  width: 35px;
  height: 35px;
  line-height: 40px;
  background-color: orange;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: 80vw;
  height: 100px;
  gap: 50px;
`;

const CommentInput = styled.input`
  width: 300px;
  height: 70px;
  padding: 30px;
  border-radius: 40px;
  background-color: lightgray;
`;

const CommentSubmitButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: #45a2be;
  color: white;
  text-align: center;
  border: 1px solid white;
  border-radius: 40px;
`;

const CommentWithReplies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 50px;
`;

const CommentBox = styled.div<{ bgcolor?: string; marginLeft?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  border-radius: 40px;
  background-color: ${({ bgcolor }) => bgcolor || '#f2d069'};
`;

const Author = styled.div`
  display: inline;
  font-size: 1.3rem;
  margin-left: 30px;
`;

const ReplyButton = styled.button`
  margin-top: 50px;
  width: fit-content;
  height: 30px;
  line-height: 30px;
  background-color: #ffecb4;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.9rem;
`;
