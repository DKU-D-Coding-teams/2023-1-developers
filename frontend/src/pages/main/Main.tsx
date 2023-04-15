import { NavbarSection, PinterestContainer, PinterestObject, TopBackground, TopBar } from 'components';
import styled from 'styled-components';
import { profilesMockData } from 'mocks';
import { useNavigate } from 'react-router-dom';
import { paths } from 'consts';
import ProfileBox from './parts/ProfileBox';
import { useEffect } from 'react';
import { getAllProfiles } from 'api';

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    getAllProfiles().then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <NavbarSection>
      <TopBar />
      <TopBackground>
        <TitleBox>D-velopers</TitleBox>
      </TopBackground>
      <PinterestContainer onMain>
        {profilesMockData.map((profile) => (
          <PinterestObject key={profile.id} onClick={() => navigate(`${paths.PROFILE_DETAIL}/${profile.id}`)}>
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
  font-family: 'S-CoreDream-3Light';
  font-weight: 100;

  transition: color 1s;
`;
