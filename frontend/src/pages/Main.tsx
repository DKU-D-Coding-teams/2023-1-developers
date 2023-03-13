import { Navbar, ProfileBox } from "components";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Section>
        <ProfileBoxContainer>
          {[1, 2, 3, 4, 5].map((num) => (
            <ProfileBoxObject>
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
      </Section>
    </>
  );
}

const ProfileBoxObject = styled.div`
  display: inline-block;
  margin: 0 10px;
  margin-bottom: 30px;
`;

const ProfileBoxContainer = styled.div`
  column-width: 30vw;
  column-gap: 20px;
`;

const Section = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 80px;
`;
