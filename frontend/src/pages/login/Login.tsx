import { postMemberLogin } from 'api';
import { AxiosError } from 'axios';
import { InputLabel, NavbarSection, SubmitInput, TopBackground, TopBar } from 'components';
import { paths } from 'consts';
import { useState, FormEvent } from 'react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginTokenStorage } from 'storage';
import { useLocalStorage } from 'usehooks-ts';

export default function Login() {
  const navigate = useNavigate();
  const [loginToken, setLoginToken] = useLocalStorage(loginTokenStorage.key, loginTokenStorage.init);
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMemberLogin(inputState.email, inputState.password).then((res) => {
      setLoginToken(res.data);
      navigate(paths.MAINPAGE);
    });
  };

  return (
    <>
      <NavbarSection>
        <TopBar />
        <TopBackground />
        <form onSubmit={login}>
          <InputLabel placeholder="이메일" name="email" onChange={handleInput} marginTop={60} />
          <InputLabel type="password" placeholder="비밀번호" name="password" onChange={handleInput} marginTop={30} />
          <SubmitInput type="submit" value="로그인" warning="" />
        </form>
      </NavbarSection>
    </>
  );
}
