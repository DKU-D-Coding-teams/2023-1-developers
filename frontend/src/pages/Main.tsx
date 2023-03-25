import { NavbarSection, ProfileBox, TopBackground, TopBar } from "components";
import styled from "styled-components";
import { profiles } from "mocks";
import { pinterestFadeIn } from "styles";

export default function Main() {
  return (
    <NavbarSection>
      <TopBar />
      <TopBackground>
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

const PinterestObject = styled.div`
  display: inline-block;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  margin: 20px 0;

  animation: ${pinterestFadeIn} 1s ease-in-out;
`;
