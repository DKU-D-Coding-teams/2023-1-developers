import { Navbar, ProfileBox } from "components";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Section>
        <div>ㅇㅇ</div>
        <ProfileBox
          profileImg="/icons/person.png"
          name="홍길동"
          studentInfo="소프트웨어 20학번 재학"
          singleIntroduce="안녕하세요~"
          tags={["Android", "Kotlin"]}
          links={["asdf", "zxcv"]}
        />
      </Section>
    </>
  );
}

const Section = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 80px;
`;
