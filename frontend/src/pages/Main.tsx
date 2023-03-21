import { Navbar, ProfileBox } from "components";
import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";

export default function Main() {
  const [scrollPos, setScrollPos] = useState(0);

  // TODO 나중에 Throttle 적용하기!!
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  return (
    <Navbar>
      <TopBar scrollPos={scrollPos}>D-velopers</TopBar>
      <TopBackground scrollPos={scrollPos}>
        <TitleBox>D-velopers</TitleBox>
      </TopBackground>
      <PinterestContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <PinterestObject key={num}>
            <ProfileBox
              profileImg="/icons/person.png"
              name="홍길동"
              studentInfo="소프트웨어 20학번 재학"
              singleIntroduce={"안녕하세요~ 안드로이드 개발자로 활동하고 있습니다!".repeat(num)}
              tags={["Android", "Kotlin"]}
              links={["asdf", "zxcv"]}
            />
          </PinterestObject>
        ))}
      </PinterestContainer>
    </Navbar>
  );
}

const dragDown = keyframes`
  from {
    height: 1px;
  }
`;

const TopBackground = styled.div<{ scrollPos: number }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: lightgray;
  animation: ${dragDown} 0.8s ease;

  opacity: ${({ scrollPos }) => 50 / (scrollPos + 1)};
`;

const TitleBox = styled.div`
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -30px;
  font-size: 60px;

  white-space: nowrap;
  font-family: "S-CoreDream-3Light";
  font-weight: 100;
`;

const PinterestContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 100px;

  max-width: 1100px;
  column-width: 300px;
  column-gap: 40px;
  padding: 0 20px;

  background-color: #e8f9ff;
`;

const fadein = keyframes`
  from {
    opacity: 0;
    margin-top: 100px;
  }
  to {
    opacity: 1;
  }
`;

const PinterestObject = styled.div`
  display: inline-block;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  margin: 20px 0;

  animation: ${fadein} 1s ease-in-out;
`;

const TopBar = styled.div<{ scrollPos: number }>`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 1;

  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;

  border-bottom: 1px solid lightgray;

  display: none;
  animation: ${dragDown} 0.3s ease-in-out;

  ${({ scrollPos }) => {
    if (scrollPos > 300) {
      return css`
        display: block;
      `;
    }
  }}
`;
