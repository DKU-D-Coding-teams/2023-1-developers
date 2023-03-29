import { InputLabel, Title, SubmitInput } from "components";
import { useState } from "react";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

// TODO // pages/register에다가 계속 이렇게 할 건지, components/register로 옮길 건지
// TODO // 일단 pages/register에서 하다가 틀 잡히면 확실히 정해서 옮겨버리자.

export default function ProfileRegister() {
  const [inputState, setInputState] = useState({
    imgUrl: "",
    name: "",
    affiliation: "",
    singleIntroduce: "",
    githubLink: "",
    otherLink: "",
    tags: [],
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
    console.log(inputState);
  };

  return (
    <>
      <Title>
        회원가입에 성공하였습니다.
        <br />
        당신은 어떤 사람인가요?
      </Title>

      <FlexBox>
        <ProfileImgUploadContainer>
          <ProfileImg src="/icons/person.png" />
          <ProfileImgUploadButton>프로필 사진 등록</ProfileImgUploadButton>
        </ProfileImgUploadContainer>
        <div>
          <InputLabel name="name" text="이름" onChange={handleInput} />
          <InputLabel name="affiliation" text="소속/학번" onChange={handleInput} marginTop={30} />
        </div>
      </FlexBox>

      <InputLabel name="githubLink" text="깃허브 링크" onChange={handleInput} width={500} marginTop={120} />

      <InputLabel name="otherLink" text="기타(블로그 등) 링크" onChange={handleInput} width={500} marginTop={40} />

      <InputLabel name="singleIntroduce" text="한줄 소개" onChange={handleInput} width={700} marginTop={120} />

      <InputLabel text="나를 표현하는 태그" width={600} marginTop={120} />
      {/*// TODO : 태그 입력 Input 컴포넌트 구현하기 */}

      <SubmitInput type="submit" value="제출" />
    </>
  );
}

const FlexBox = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  gap: 100px;
  width: fit-content;
`;

const ProfileImgUploadContainer = styled.div`
  position: relative;
  width: 160px;
  animation: ${waitAndDragUpFadeIn} 2.3s;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 40px;
  background-color: gray;
`;

const ProfileImgUploadButton = styled.button`
  width: 100%;
  height: 30px;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid gray;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const P = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;
