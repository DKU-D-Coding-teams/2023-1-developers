import { Comment } from 'api';
import styled from 'styled-components';

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentWithReplies>
          <CommentBox>
            {comment.author} {comment.content}
          </CommentBox>
          {comment.replies.map((reply) => (
            <ReplyBox>
              {reply.author} {reply.content}
            </ReplyBox>
          ))}
        </CommentWithReplies>
      ))}
    </>
  );
}

const CommentWithReplies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 50px;
`;

const CommentBox = styled.div`
  width: 500px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 40px;
  background-color: yellow;
`;

const ReplyBox = styled.div`
  margin-left: 100px;
  width: 500px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 40px;
  background-color: aqua;
`;
