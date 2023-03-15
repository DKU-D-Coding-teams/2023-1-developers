import { Navbar, ProfileBox } from "components";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <Section>
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
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  column-width: 300px;
  column-gap: 20px;
  background-color: skyblue;
`;

const Section = styled.section`
  position: relative;
  display: block;
  margin-left: 80px;
`;
