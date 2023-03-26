import { NavbarSection, ProfileBox } from "components";
import styled, { css, keyframes } from "styled-components";
import { profiles } from "mocks";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "atoms";

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
  background-color: ${({ theme }) => theme.colors.topBg};
  animation: ${dragDown} 0.8s ease;

  opacity: ${({ scrollPos }) => 50 / (scrollPos + 1)};
  transition: opacity 0.5s, background-color 1s;
`;

const TitleBox = styled.div`
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -30px;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.titleFont};

  white-space: nowrap;
  font-family: "S-CoreDream-3Light";
  font-weight: 100;

  transition: color 1s;
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

  background-color: ${({ theme }) => theme.colors.pinterestContainer};
  transition: background-color 1s;
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
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.titleFont};
  z-index: 1;

  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;

  box-shadow: 0px 5px 25px -5px rgba(0, 0, 0, 0.3);

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
