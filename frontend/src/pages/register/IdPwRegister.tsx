import { RegisterPageTitle } from "components";
import styled from "styled-components";
import { shakeHorizontal, waitAndDragUpFadeIn } from "styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IdPwRegister() {
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    id: "",
    pw: "",
    pwRe: "",
  });

  const [warning, setWarning] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
    setWarning("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idReg = /^[0-9a-z]{4,16}$/; // 숫자 또는 알파벳 6글자 이상 16글자 이하
    const pwReg = /^.{8,25}$/; // 모든 문자 6글자 이상 25글자 이하
    if (!idReg.test(inputState.id)) {
      setWarning("※아이디는 숫자와 알파벳 소문자로 입력해 주세요!");
      return;
    }
    if (!pwReg.test(inputState.pw)) {
      setWarning("※비밀번호가 너무 짧거나 깁니다!");
      return;
    }
    if (inputState.pw != inputState.pwRe) {
      setWarning("※비밀번호 재입력이 일치하지 않습니다!");
      return;
    }

    navigate("/register/profile");
  };

  return (
    <>
      <RegisterPageTitle>사용할 아이디와 비밀번호를 입력해 주세요.</RegisterPageTitle>

      <form onSubmit={handleSubmit}>
        <Input placeholder="아이디" name="id" onChange={handleInput} />
        <Input type="password" placeholder="비밀번호" name="pw" onChange={handleInput} />
        <Input type="password" marginTop="30px" placeholder="비밀번호 재입력" name="pwRe" onChange={handleInput} />

        {warning ? <WarningBox>{warning}</WarningBox> : <SubmitInput type="submit" value="제출" />}
      </form>
    </>
  );
}

const Input = styled.input<{ marginTop?: string }>`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop || "60px"};

  height: 40px;
  line-height: 40px;
  padding: 10px;
  font-size: 20px;

  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2s;
`;

const SubmitInput = styled.input`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 60px;

  width: 130px;
  height: 70px;
  font-size: 22px;

  color: white;
  background-color: skyblue;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2.3s;
`;

const WarningBox = styled.div`
  margin: 0 auto;
  margin-top: 60px;

  color: white;

  width: fit-content;
  padding: 20px;
  border-radius: 20px;
  background-color: lightcoral;

  animation: ${shakeHorizontal} 0.4s;
`;
