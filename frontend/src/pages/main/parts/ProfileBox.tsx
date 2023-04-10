import styled from "styled-components";
import { useEffect, useState } from "react";
import wait from "waait";
import { TagBox, LinkBox } from "components";

interface Props {
  profileImg: string;
  name: string;
  studentInfo: string;
  singleIntroduce: string;
  tags: string[];
  links: string[];
}

export default function ProfileBox({ profileImg, name, studentInfo, singleIntroduce, tags, links }: Props) {
  const [introduceText, setIntroduceText] = useState("");

  useEffect(() => {
    runTypingAnimation(1000);
  }, []);

  const runTypingAnimation = async (duration: number) => {
    for (let i = 1; i <= singleIntroduce.length; i++) {
      setIntroduceText(singleIntroduce.slice(0, i));
      await wait(duration / singleIntroduce.length);
    }
  };

  return (
    <Wrapper>
      <InfoContainer>
        <ProfileImg src={profileImg} alt="프로필 이미지" />
        <div>{name}</div>
        <StudentInfo>{studentInfo}</StudentInfo>
      </InfoContainer>
      <IntroduceBox>
        <div>{introduceText}</div>
      </IntroduceBox>
      <Footer>
        <TagBox>
          {tags.map((tag, idx) => (
            <div key={idx}>{tag}</div>
          ))}
        </TagBox>
        <LinkBox>
          {links.map((link, idx) => (
            <a href={link} target="_blank" key={idx}>
              <img src="/icons/board.png" />
            </a>
          ))}
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
