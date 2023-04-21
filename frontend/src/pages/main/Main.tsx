import { NavbarSection, PinterestContainer, PinterestObject, TopBackground, TopBar } from 'components';
import styled from 'styled-components';
import { profilesMockData } from 'mocks';
import { useNavigate } from 'react-router-dom';
import { paths } from 'consts';
import ProfileBox from './parts/ProfileBox';
import { useEffect, useState } from 'react';
import { LoginToken, Profile, getAllProfiles } from 'api';
import { useReadLocalStorage } from 'usehooks-ts';
import { loginTokenStorage } from 'storage';

export default function Main() {
  const loginToken = useReadLocalStorage<LoginToken>(loginTokenStorage.key);
  const navigate = useNavigate();
  const [profilesData, setProfilesData] = useState<Profile[]>();

  useEffect(() => {
    getAllProfiles(loginToken)
      .then((res) => {
        // tags를 string[]으로 변경
        let rawData = res.data;
        rawData = rawData.map((profileObj) => {
          profileObj.tags = profileObj.tags.map((tagObj) => tagObj.tagName);
          return profileObj;
        });

        const refinedData: Profile[] = rawData;
        setProfilesData(refinedData);
      })
      .catch((res) => {
        console.log(res);
        setProfilesData(profilesMockData);
      });
  }, []);

  return (
    <NavbarSection>
      <TopBar />
      <TopBackground>
        <TitleBox>D-velopers</TitleBox>
      </TopBackground>
      <PinterestContainer isOnMain>
        {profilesData &&
          profilesData.map((profile) => (
            <PinterestObject key={profile.id} onClick={() => navigate(`${paths.PROFILE_DETAIL}/${profile.id}`)}>
              <ProfileBox profile={profile} />
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
