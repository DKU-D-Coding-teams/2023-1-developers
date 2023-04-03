import { registerProcessState } from "atoms";
import { InputLabel, SubmitInput, Title } from "components";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";

export default function EmailCheck() {
  const [registerProcess, setRegisterProcess] = useRecoilState(registerProcessState);
  const [warning, setWarning] = useState("");

  const updateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailReg.test(e.target.value)) {
      setWarning("※이메일 형식이 일치하지 않습니다!");
      return;
    }

    setRegisterProcess((prev) => ({ ...prev, email: e.target.value }));
  };

  return (
    <>
      <Title>이메일을 입력하고, 받은 번호로 인증하세요.</Title>

      <form>
        <InputLabel placeholder="이메일" onChange={updateEmail} marginTop={60} />

        <SubmitInput type="submit" value="인증 번호 보내기" warning={warning} />
      </form>
    </>
  );
}
