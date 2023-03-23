import { NavbarSection, ProfileBox } from "components";
import styled, { css, keyframes } from "styled-components";
import { profiles } from "mocks";

export default function Main() {
  const scrollPos = useRecoilValue(scrollPosState);

  return (
    <NavbarSection>
      <TopBar scrollPos={scrollPos}>D-velopers</TopBar>
      <TopBackground scrollPos={scrollPos}>
        <TitleBox>D-velopers</TitleBox>
      </TopBackground>
      <PinterestContainer>
        {profiles.map((profile, idx) => (
          <PinterestObject key={idx}>
            <ProfileBox {...profile} />
          </PinterestObject>
        ))}
      </PinterestContainer>
    </NavbarSection>
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
  transition: opacity 0.5s;
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
