import { NavbarSection, TopBackground, TopBar } from "components";
import PostBox from "pages/free-board/parts/PostBox";
import { postsMockData } from "mocks";
import styled from "styled-components";
import { pinterestFadeIn } from "styles";

export default function FreeBoard() {
  return (
    <NavbarSection>
      <TopBar />
      <TopBackground />
      <PinterestContainer>
        <PostingButton>글쓰기 +</PostingButton>
        {postsMockData.map((post) => (
          <PinterestObject key={post.id}>
            <PostBox post={post} />
          </PinterestObject>
        ))}
      </PinterestContainer>
    </NavbarSection>
  );
}

// TODO Main이랑 겹침
const PinterestContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 100px;

  max-width: 1100px;
  column-width: 300px;
  column-gap: 40px;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.boardPinterestContainer};
  transition: background-color 1s;
`;

const PinterestObject = styled.div`
  display: inline-block;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  margin: 20px 0;
  cursor: pointer;

  animation: ${pinterestFadeIn} 1s ease-in-out;
`;

const PostingButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.defaultFont};
  transition: border 0.2s;

  &:hover {
    border-color: gray;
  }
`;
