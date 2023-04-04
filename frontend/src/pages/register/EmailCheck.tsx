import { InputLabel, SubmitInput, Title } from "components";
import { ChangeEvent, FormEvent, useState } from "react";
import { postEmailCheck } from "api";
import { useNavigate } from "react-router-dom";
import { paths } from "consts";
import { useLocalStorage } from "usehooks-ts";
import { registerInfoStorage } from "storage";

export default function EmailCheck() {
  const navigate = useNavigate();

  const [authCode, setAuthCode] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [authCodeWarning, setAuthCodeWarning] = useState("");
  const [registerInfo, setRegisterInfo] = useLocalStorage(registerInfoStorage.key, registerInfoStorage.init);

  const checkEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dkuEmailReg = /^[a-zA-Z0-9._%+-]+@dankook\.ac\.kr$/;

    if (!emailReg.test(e.target.value)) {
      setEmailWarning("※이메일 형식이 일치하지 않습니다!");
      return;
    }
    if (registerInfo.isDKU && !dkuEmailReg.test(e.target.value)) {
      setEmailWarning("※단국대학교 이메일이 아닙니다!");
      return;
    }

    setRegisterInfo((prev) => ({ ...prev, email: e.target.value }));
    setEmailWarning("");
  };

  const checkAuthCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== authCode) {
      setAuthCodeWarning("※인증 코드가 일치하지 않습니다!");
      return;
    }

    setAuthCodeWarning("");
  };

  const sendEmailAuthCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await postEmailCheck(registerInfo.email);
    console.log(response);
    setAuthCode(response.data.data);
  };

  const submitAuthCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(paths.register.ID_PW_REGISTER);
  };

  return (
    <>
      <Title>이메일을 입력하고, 받은 번호로 인증하세요.</Title>

      <form onSubmit={sendEmailAuthCode}>
        <InputLabel placeholder="이메일" onChange={checkEmailInput} marginTop={60} />

        {!authCode && <SubmitInput type="submit" value="인증 코드 보내기" warning={emailWarning} />}
      </form>

      {authCode && (
        <form onSubmit={submitAuthCode}>
          <InputLabel placeholder="인증 코드" onChange={checkAuthCodeInput} marginTop={100} />
          <SubmitInput type="submit" value="확인" warning={authCodeWarning} />
        </form>
      )}
    </>
  );
}
