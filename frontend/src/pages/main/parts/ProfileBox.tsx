import styled from 'styled-components';
import { useEffect, useState } from 'react';
import wait from 'waait';
import { TagBox, LinkBox } from 'components';
import { Profile } from 'api';

export default function ProfileBox({ profile }: { profile: Profile }) {
  const [introduceText, setIntroduceText] = useState('');

  useEffect(() => {
    runTypingAnimation(1000);
  }, []);

  const runTypingAnimation = async (duration: number) => {
    for (let i = 1; i <= profile.introduce.length; i++) {
      setIntroduceText(profile.introduce.slice(0, i));
      await wait(duration / profile.introduce.length);
    }
  };

  return (
    <Wrapper>
      <InfoContainer>
        <ProfileImg src={profile.s3ImagePath} alt="프로필 이미지" />
        <div>{profile.name}</div>
        <StudentInfo>{profile.studentId}</StudentInfo>
      </InfoContainer>
      <IntroduceBox>
        <div>{introduceText}</div>
      </IntroduceBox>
      <Footer>
        <TagBox>
          {profile.tags.map((tag, i) => (
            <div key={i}>{tag}</div>
          ))}
        </TagBox>
        <LinkBox>
          <a href={profile.githubLink} target="_blank">
            <img src="/icons/github.png" />
          </a>
          <a href={profile.blogLink} target="_blank">
            <img src="/icons/blog.png" />
          </a>
        </LinkBox>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  border: 2px solid gray;
  background-color: lightgray;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);

  min-width: 300px;
  max-width: 400px;

  min-height: 200px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70%;
`;

const StudentInfo = styled.div`
  color: darkgray;
  font-size: small;
`;

const IntroduceBox = styled.div`
  padding: 20px 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
