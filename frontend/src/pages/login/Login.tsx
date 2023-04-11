import { postMemberLogin } from 'api';
import { InputLabel, NavbarSection, SubmitInput, TopBackground, TopBar } from 'components';
import { useState, FormEvent } from 'react';
import { ChangeEvent } from 'react';

export default function Login() {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await postMemberLogin(inputState.email, inputState.password);
    console.log(response);
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
