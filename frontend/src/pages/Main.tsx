import { Navbar } from "components";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <Background>
        <GrayBox />
        <TitleBox>D.velopers</TitleBox>
      </Background>
      <Wrapper>
        <Navbar />
        <section>
          <div>ㅇㅇ</div>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const GrayBox = styled.div`
  display: block;
  position: static;
  width: 100%;
  height: 30%;
  background-color: lightgray;
`;

const TitleBox = styled.div`
  display: block;
  position: static;
  width: 100%;
  height: 50px;
`;
