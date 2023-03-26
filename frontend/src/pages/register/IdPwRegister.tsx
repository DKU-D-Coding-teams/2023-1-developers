import { RegisterPageTitle } from "components";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";
import { useState } from "react";

export default function IdPwRegister() {
  const [inputState, setInputState] = useState({
    id: "",
    pw: "",
    pwRe: "",
  });

  const handleInput = function (e) {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <RegisterPageTitle>사용할 아이디와 비밀번호를 입력해 주세요.</RegisterPageTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input placeholder="아이디" name="id" onChange={handleInput} />

        <Input type="password" placeholder="비밀번호" name="pw" onChange={handleInput} />

        <Input type="password" marginTop="30px" placeholder="비밀번호 재입력" name="pwRe" onChange={handleInput} />

        <SubmitInput type="submit" value="제출" />
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
  margin-top: 100px;

  width: 130px;
  height: 70px;
  font-size: 22px;

  color: white;
  background-color: skyblue;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2.3s;
`;
