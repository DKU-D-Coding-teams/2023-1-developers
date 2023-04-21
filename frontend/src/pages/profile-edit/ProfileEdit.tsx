import { NavbarSection, ProfileForm, TopBackground, TopBar } from 'components';
import { useReadLocalStorage } from 'usehooks-ts';
import { loginTokenStorage } from 'storage';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { paths } from 'consts';
import { waitAndDragUpFadeIn } from 'styles';
import { LoginToken } from 'api';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const loginToken = useReadLocalStorage<LoginToken>(loginTokenStorage.key);

  return (
    <NavbarSection>
      <TopBar />
      <TopBackground />
      {loginToken ? (
        <>
          <Title>프로필을 다시 입력하면 새로운 프로필로 수정됩니다.</Title>
          <ProfileForm />
        </>
      ) : (
        <Title>
          <>회원가입 또는 로그인해 주세요!</>
          <ButtonContainer>
            <Button onClick={() => navigate(paths.register.STUDENT_CHECK)}>회원가입</Button>
            <Button onClick={() => navigate(paths.LOGIN)}>로그인</Button>
          </ButtonContainer>
        </Title>
      )}
    </NavbarSection>
  );
}

const Title = styled.div`
  position: relative;
  margin-top: 50px;
  font-size: 1.5rem;
  text-align: center;
  animation: ${waitAndDragUpFadeIn} 1.5s;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 30px;
`;

const Button = styled.button`
  background-color: orange;
  border-radius: 100px;
  padding: 25px;
  color: white;
`;
