import { Navbar, ProfileBox } from "components";
import styled from "styled-components";

export default function Main() {
  return (
    <Navbar>
      <TopBackground>
        <TitleBox>D-velopers</TitleBox>
      </TopBackground>
      <ProfileBoxContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <ProfileBoxObject key={num}>
            <ProfileBox
              profileImg="/icons/person.png"
              name="홍길동"
              studentInfo="소프트웨어 20학번 재학"
              singleIntroduce={"안녕하세요~ 안드로이드 개발자로 활동하고 있습니다!".repeat(num)}
              tags={["Android", "Kotlin"]}
              links={["asdf", "zxcv"]}
            />
          </ProfileBoxObject>
        ))}
      </ProfileBoxContainer>
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
`;

const ProfileBoxContainer = styled.div`
  position: block;

  margin-top: 100px;

  width: 100%;

  column-width: 300px;
  background-color: #d1f3ff;
`;

const ProfileBoxObject = styled.div`
  display: inline-block;
  margin: 20px 20px;
`;
