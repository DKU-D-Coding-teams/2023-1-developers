import { NavbarSection, PinterestContainer, PinterestObject, TopBackground, TopBar } from 'components';
import PostBox from './parts/PostBox';
import { postsMockData } from 'mocks';
import styled from 'styled-components';
import PostingModal from './parts/posting-modal/PostingModal';
import { useSetRecoilState } from 'recoil';
import { isModalActiveState } from 'storage';

export default function FreeBoard() {
  const setModalActive = useSetRecoilState(isModalActiveState);

  return (
    <NavbarSection>
      <TopBar />
      <TopBackground />
      <PinterestContainer>
        <PostingButton onClick={() => setModalActive(true)}>글쓰기 +</PostingButton>
        {postsMockData.map((post) => (
          <PinterestObject key={post.id}>
            <PostBox post={post} />
          </PinterestObject>
        ))}
      </PinterestContainer>
      <PostingModal />
    </NavbarSection>
  );
}

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
