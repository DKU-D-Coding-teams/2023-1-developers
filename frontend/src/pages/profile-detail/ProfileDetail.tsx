import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DetailedProfile, LoginToken, getDetailedProfile } from 'api';
import { LinkBox, NavbarSection, TagBox, TopBackground, TopBar } from 'components';
import { profilesMockData } from 'mocks';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { loginTokenStorage } from 'storage';
import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import Comments from './parts/Comments';

export default function ProfileDetail() {
  const { profileId } = useParams();
  const loginToken = useReadLocalStorage<LoginToken>(loginTokenStorage.key);

  const [profileData, setProfileData] = useState<DetailedProfile>();

  useEffect(() => {
    getDetailedProfile(Number(profileId), loginToken)
      .then((res) => {
        let rawData = res.data;
        rawData.tags = rawData.tags.map((tagObj) => tagObj.tagName);

        const refinedData: DetailedProfile = rawData;
        setProfileData(refinedData);
      })
      .catch((res) => {
        console.log(res);
        const [targetProfile] = profilesMockData.filter((profile) => profile.id === Number(profileId));
        setProfileData(targetProfile);
      });
  }, []);

  return (
    profileData && (
      <NavbarSection>
        <TopBar />
        <TopBackground>
          <ProfileImgInfoBox>
            <ProfileImg src={profileData.s3ImagePath} />
            <div>
              <Name>{profileData.name}</Name>
              <Affiliation>{profileData.affiliation}</Affiliation>
              <Email>asdf1234@dankook.ac.kr</Email>
            </div>
          </ProfileImgInfoBox>
        </TopBackground>

        <IntroduceBox>
          <SingleIntroduce>{profileData.introduce}</SingleIntroduce>
          <TagLinkBox>
            <TagBox>
              {profileData.tags.map((tag, i) => (
                <div key={i}>#{tag}</div>
              ))}
            </TagBox>
            <LinkBox>
              <a href={profileData.githubLink} target="_blank">
                <img src="/icons/board.png" />
              </a>
            </LinkBox>
          </TagLinkBox>
        </IntroduceBox>

        <Hr width="50%" />
        <CircleBoundary>
          <CircleIcon icon={faCircle} />
          <CircleIcon icon={faCircle} />
          <CircleIcon icon={faCircle} />
        </CircleBoundary>

        <DetailedIntroduce>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{profileData.detailIntroduce}</ReactMarkdown>
        </DetailedIntroduce>

        <Hr width="80%" />

        <Comments profileId={Number(profileId)} comments={profileData.comments} />
      </NavbarSection>
    )
  );
}

const ProfileImgInfoBox = styled.div`
  position: absolute;
  display: flex;
  left: 100px;
  bottom: -50px;
  gap: 20px;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 2.1rem;

  margin: 7px;
  margin-top: 20px;
`;

const Affiliation = styled.div`
  font-size: 1.5rem;
  color: gray;
  opacity: 0.9;
`;

const Email = styled.div`
  color: skyblue;
  opacity: 0.7;
`;

const IntroduceBox = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: fit-content;
`;

const SingleIntroduce = styled.div`
  width: fit-content;
  padding: 25px;

  font-size: 1.2rem;
  background-color: #c3e4ff;
  border-radius: 40px;
`;

const TagLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hr = styled.hr<{ width: string }>`
  margin-top: 100px;
  width: ${({ width }) => width};
  opacity: 0.6;
`;

const CircleBoundary = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const CircleIcon = styled(FontAwesomeIcon)`
  color: lightgray;
`;

const DetailedIntroduce = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 90%;
  font-size: 1.1rem;
`;
