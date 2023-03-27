import { RegisterPageInput, RegisterPageTitle } from "components";
import styled from "styled-components";

// TODO // pages/register에다가 계속 이렇게 할 건지, components/register로 옮길 건지
// TODO // 일단 pages/register에서 하다가 틀 잡히면 확실히 정해서 옮겨버리자.

export default function ProfileRegister() {
  return (
    <>
      <RegisterPageTitle>
        회원가입에 성공하였습니다.
        <br />
        당신은 어떤 사람인가요?
      </RegisterPageTitle>

      <FlexBox>
        <ProfileImgUploadContainer>
          <ProfileImg src="/icons/person.png" />
          <ProfileImgUploadButton>프로필 사진 등록</ProfileImgUploadButton>
        </ProfileImgUploadContainer>
        <div>
          <RegisterPageInput />
          <RegisterPageInput />
        </div>
      </FlexBox>
    </>
  );
}

const FlexBox = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  width: fit-content;
`;

const ProfileImgUploadContainer = styled.div`
  width: 160px;
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
`;
