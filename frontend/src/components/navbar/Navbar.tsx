import styled from 'styled-components';
import Nav from './Nav';
import { paths } from 'consts';

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <Nav path={paths.MAINPAGE}>
          <Icon src="/icons/home.png" alt="홈 아이콘" />
          <div>MainPage</div>
        </Nav>
        <Nav path={paths.PROFILE_EDIT}>
          <Icon src="/icons/person.png" alt="사람 아이콘" />
          <div>My Profile</div>
        </Nav>
        <Nav path={paths.FREEBOARD}>
          <Icon src="/icons/board.png" alt="게시판 아이콘" />
          <div>FreeBoard</div>
        </Nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: #3c3c3c;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: row;
    width: 100%;
    height: 80px;
    bottom: 0;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
