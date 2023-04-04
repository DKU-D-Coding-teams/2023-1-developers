import { InputLabel, Title, SubmitInput } from "components";
import styled from "styled-components";
import { shakeHorizontal } from "styles";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postEmailCheck } from "api";
import { paths } from "consts";

export default function IdPwRegister() {
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    id: "",
    pw: "",
    pwRe: "",
  });

  const [warning, setWarning] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
    setWarning("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleInputExceptions();
    navigate(paths.register.PROFILE_REGISTER);
  };

  const handleInputExceptions = () => {
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
  };

  return (
    <>
      <Title>사용할 아이디와 비밀번호를 입력해 주세요.</Title>

      <form onSubmit={handleSubmit}>
        <InputLabel placeholder="아이디" name="id" onChange={handleInput} marginTop={60} />
        <InputLabel type="password" placeholder="비밀번호" name="pw" onChange={handleInput} marginTop={60} />
        <InputLabel type="password" placeholder="비밀번호 재입력" name="pwRe" onChange={handleInput} marginTop={30} />

        <SubmitInput type="submit" value="제출" warning={warning} />
      </form>
    </>
  );
}
