import styled from "styled-components";

interface IProps {
  profileImg: string;
  name: string;
  studentInfo: string;
  singleIntroduce: string;
  tags: string[];
  links: string[];
}

export default function ProfileBox({ profileImg, name, studentInfo, singleIntroduce, tags, links }: IProps) {
  return (
    <Wrapper>
      <InfoContainer>
        <ProfileImg src={profileImg} alt="프로필 이미지" />
        <div>{name}</div>
        <StudentInfo>{studentInfo}</StudentInfo>
      </InfoContainer>
      <IntroduceBox>
        <div>{singleIntroduce}</div>
      </IntroduceBox>
      <Footer>
        <TagBox>
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </TagBox>
        <LinkBox>
          {links.map((link) => (
            <div>{link}</div>
          ))}
        </LinkBox>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  border: 2px solid gray;
  background-color: lightgray;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 200px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StudentInfo = styled.div`
  color: darkgray;
  font-size: small;
`;

const IntroduceBox = styled.div`
  height: 30%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagBox = styled.div`
  display: flex;
`;

const LinkBox = styled.div`
  display: flex;
`;
