import { InputLabel, SubmitInput, Title } from "components";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
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

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    checkEmailFormatCorrect(e.target.value);
    setRegisterInfo((prev) => ({ ...prev, email: e.target.value }));
  };

  const sendEmailAuthCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmailFormatCorrect(registerInfo.email).then(async () => {
      const response = await postEmailCheck(registerInfo.email);
      console.log(response);
      setAuthCode(response.data.data);
    });
  };

  const handleAuthCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== authCode) {
      setAuthCodeWarning("※인증 코드가 일치하지 않습니다!");
      return;
    }

    setAuthCodeWarning("");
  };

  const submitAuthCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authCodeWarning === "") {
      navigate(paths.register.PW_REGISTER);
    }
  };

  const checkEmailFormatCorrect = (email: string) =>
    new Promise((resolve) => {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const dkuEmailReg = /^[a-zA-Z0-9._%+-]+@dankook\.ac\.kr$/;
      if (!emailReg.test(email)) {
        setEmailWarning("※이메일 형식이 일치하지 않습니다!");
        return;
      }
      if (registerInfo.isDKU && !dkuEmailReg.test(email)) {
        setEmailWarning("※단국대학교 이메일이 아닙니다!");
        return;
      }
      setEmailWarning("");
      resolve(0);
    });

  return (
    <>
      <Title>이메일을 입력하고, 받은 번호로 인증하세요.</Title>

      <form onSubmit={sendEmailAuthCode}>
        <InputLabel placeholder="이메일" onChange={handleEmailInput} marginTop={60} />

        {!authCode && <SubmitInput type="submit" value="인증 코드 보내기" warning={emailWarning} />}
      </form>

      {authCode && (
        <form onSubmit={submitAuthCode}>
          <InputLabel placeholder="인증 코드" onChange={handleAuthCodeInput} marginTop={100} />
          <SubmitInput type="submit" value="확인" warning={authCodeWarning} />
        </form>
      )}
    </>
  );
}
