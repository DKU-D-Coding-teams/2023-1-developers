import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkBox, NavbarSection, TagBox, TopBackground, TopBar } from "components";
import { Profile, profilesMockData } from "mocks";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ProfileDetail() {
  const { userId } = useParams();

  // TODO: mock data 기반으로 만들어 둠. 나중에 interface랑 이것저것 다 갈아엎기!
  const [profileData, setProfileData] = useState<Profile>();

  useEffect(() => {
    const [targetProfile] = profilesMockData.filter((profile) => profile.id === Number(userId));
    setProfileData(targetProfile);
  }, []);

  return (
    profileData && (
      <NavbarSection>
        <TopBar />
        <TopBackground>
          <ProfileImgInfoBox>
            <ProfileImg src={profileData.profileImg} />
            <div>
              <Name>{profileData.name}</Name>
              <Affiliation>{profileData.studentInfo}</Affiliation>
              <Email>{profileData.email}</Email>
            </div>
          </ProfileImgInfoBox>
        </TopBackground>

        <IntroduceBox>
          <SingleIntroduce>{profileData.singleIntroduce}</SingleIntroduce>
          <TagLinkBox>
            <TagBox>
              {profileData.tags.map((tag, i) => (
                <div key={i}>#{tag}</div>
              ))}
            </TagBox>
            <LinkBox>
              {profileData.links.map((link, i) => (
                // TODO: 나중에 link 요소 이미지 그 링크에 알맞게 해주는 코드 짜기
                // TODO: 애초에 링크 2개만 받으니까 배열로받지말고 따로 받아도될거같기도하고 (이미 지나간 물이라 못바꾸겠지만)
                <a href={link} target="_blank" key={i}>
                  <img src="/icons/board.png" />
                </a>
              ))}
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
          <ReactMarkdown children={profileData.detailedIntroduce} />
        </DetailedIntroduce>

        <Hr width="80%" />
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
`;
