import { Navbar } from "components";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Section>
        <div>ㅇㅇ</div>
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
