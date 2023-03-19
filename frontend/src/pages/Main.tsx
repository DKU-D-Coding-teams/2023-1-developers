import { Navbar, ProfileBox } from "components";
import styled from "styled-components";

export default function Main() {
  return (
    <Navbar>
      <TopBackground>
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
const TopBackground = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: lightgray;
`;

const TitleBox = styled.div`
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -25px;
  font-size: 60px;

  white-space: nowrap;
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

  background-color: #def6ff;
`;

const PinterestObject = styled.div`
  display: inline-block;
  margin: 20px 0;
  min-width: 300px;
`;
