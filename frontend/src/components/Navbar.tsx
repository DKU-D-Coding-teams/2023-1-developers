import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <NavButton>
        <Icon src="/icons/home.png" alt="홈 아이콘" />
        <div>MainPage</div>
      </NavButton>
      <NavButton>
        <Icon src="/icons/person.png" alt="사람 아이콘" />
        <div>My Profile</div>
      </NavButton>
      <NavButton>
        <Icon src="/icons/board.png" alt="게시판 아이콘" />
        <div>Credits</div>
      </NavButton>
    </Wrapper>
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

const NavButton = styled.button`
  width: 100%;
  margin-top: 50px;
  color: lightgray;
  text-align: center;
  font-size: 14px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
