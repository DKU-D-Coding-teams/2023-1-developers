import { NavbarSection, ProfileForm, TopBackground, TopBar } from 'components';
import { useReadLocalStorage } from 'usehooks-ts';
import { loginTokenStorage } from 'storage';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { paths } from 'consts';
import { waitAndDragUpFadeIn } from 'styles';
import { LoginToken, postMemberLogout } from 'api';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const loginToken = useReadLocalStorage<LoginToken>(loginTokenStorage.key);

  const logout = () => {
    window.localStorage.removeItem(loginTokenStorage.key);
    postMemberLogout(loginToken).then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <NavbarSection>
      <TopBar />
      <TopBackground />
      {loginToken ? (
        <>
          <LogoutButton onClick={logout}>로그아웃</LogoutButton>
          <Title>프로필을 다시 입력하면 새로운 프로필로 수정됩니다.</Title>
          <ProfileForm isEdit />
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

const LogoutButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  margin: 0 auto;
  width: 80px;
  height: 50px;
  background-color: lightgray;
  text-align: center;
  color: gray;
  border: 1px solid gray;
  border-radius: 20px;
`;

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
