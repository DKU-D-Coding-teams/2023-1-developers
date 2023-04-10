import { Post } from "mocks";
import styled from "styled-components";

export default function PostBox({ post }: { post: Post }) {
  return (
    <Wrapper>
      {/* //TODO 그냥 캐러셀 넣어도 될듯? */}
      <ImgContainer>
        {post.images.map((img) => (
          <Img src={img} />
        ))}
      </ImgContainer>
      <PostTitle>{post.title}</PostTitle>
      <Content>{post.content}</Content>
    </Wrapper>
  );
}

// TODO ProfileBox랑 겹침
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  border: 2px solid gray;
  background-color: lightgray;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);

  min-width: 300px;
  max-width: 400px;

  min-height: 200px;
`;

const ImgContainer = styled.div`
  border: 1px solid gray;
  column-width: 100px;
  padding: 20px;
`;

const Img = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const PostTitle = styled.div`
  margin: 20px auto;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Content = styled.div`
  margin: 20px auto;
  font-size: 1.1rem;
`;
