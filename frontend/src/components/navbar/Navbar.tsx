import styled from "styled-components";
import Nav from "./Nav";

export default function Navbar({ children }) {
  return (
    <>
      <Wrapper>
        <Nav path="/">
          <Icon src="/icons/home.png" alt="홈 아이콘" />
          <div>MainPage</div>
        </Nav>
        <Nav path="/profile-edit">
          <Icon src="/icons/person.png" alt="사람 아이콘" />
          <div>My Profile</div>
        </Nav>
        <Nav path="/credit">
          <Icon src="/icons/board.png" alt="게시판 아이콘" />
          <div>Credits</div>
        </Nav>
      </Wrapper>
      {children}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: #3c3c3c;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
