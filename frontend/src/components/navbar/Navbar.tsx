import { ReactNode } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { paths } from "consts";

interface Props {
  children: ReactNode;
}

export default function Navbar({ children }: Props) {
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
        <Nav path={paths.CREDITS}>
          <Icon src="/icons/board.png" alt="게시판 아이콘" />
          <div>Credits</div>
        </Nav>
      </Wrapper>

      <Section>{children}</Section>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: #3c3c3c;
  z-index: 1;

  @media screen and (max-width: 750px) {
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

const Section = styled.section`
  position: relative;
  display: block;
  margin-left: 80px;

  @media screen and (max-width: 750px) {
    margin-left: 0;
    margin-bottom: 80px;
  }
`;
