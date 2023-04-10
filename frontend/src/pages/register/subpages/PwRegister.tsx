import { InputLabel, SubmitInput } from "components";
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterParams, postMemberRegister } from "api";
import { paths } from "consts";
import { useLocalStorage } from "usehooks-ts";
import { registerInfoStorage } from "storage";
import Title from "../parts/Title";

export default function PwRegister() {
  const navigate = useNavigate();
  const $pwInput = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState({
    pw: "",
    pwRe: "",
  });
  const [warning, setWarning] = useState("");
  const [registerInfo, setRegisterInfo] = useLocalStorage(registerInfoStorage.key, registerInfoStorage.init); // TODO : registerInfoStorage에다가 그냥 data(RegisterParams)를 통째로 넣으면 차라리 더 편할 듯?

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkInputStateCorrect().then(() => {
      const data: RegisterParams = {
        email: registerInfo.email,
        gender: "MALE",
        memberType: registerInfo.isDKU ? "DKU" : "GUEST",
        name: "임시",
        password: inputState.pw,
      };
      postMemberRegister(data).then(() => {
        navigate(paths.register.PROFILE_REGISTER);
      });
    });
  };

  const checkInputStateCorrect = () =>
    new Promise((resolve) => {
      const pwReg = /^.{6,25}$/; // 모든 문자 6글자 이상 25글자 이하

      if (!pwReg.test(inputState.pw)) {
        setWarning("※비밀번호가 너무 짧거나 깁니다!");
        return;
      }
      if (inputState.pw != inputState.pwRe) {
        setWarning("※비밀번호 재입력이 일치하지 않습니다!");
        return;
      }

      setWarning("");
      resolve(0);
    });

  useEffect(() => {
    if (inputState.pw) {
      checkInputStateCorrect();
    }
  }, [inputState]);

  return (
    <>
      <Title>사용할 비밀번호를 입력해 주세요.</Title>

      <form onSubmit={handleSubmit}>
        <InputLabel type="password" placeholder="비밀번호" name="pw" onChange={handleInput} marginTop={60} />
        <InputLabel type="password" placeholder="비밀번호 재입력" name="pwRe" onChange={handleInput} marginTop={30} />

        <SubmitInput type="submit" value="제출" warning={warning} />
      </form>
    </>
  );
}
