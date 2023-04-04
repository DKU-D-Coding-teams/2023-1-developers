import { Routes, Route } from "react-router-dom";
import { GlobalStyle, lightTheme, darkTheme } from "styles";
import { Credits, Main, ProfileEdit, Register, StudentCheck, ProfileRegister, IdPwRegister, EmailCheck } from "pages";
import { paths } from "consts";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkThemeState, scrollPosState } from "storage";
import { throttle } from "lodash";
import { ThemeProvider } from "styled-components";
import { ThemeButton } from "components";

export default function App() {
  const setScrollPos = useSetRecoilState(scrollPosState);
  const isDarkTheme = useRecoilValue(isDarkThemeState);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle((e) => {
        setScrollPos(window.scrollY);
      }, 100)
    );
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Routes>
          <Route path="*" element={<div> Not Found </div>} />
          <Route path={paths.MAINPAGE} element={<Main />} />
          <Route path={paths.PROFILE_EDIT} element={<ProfileEdit />} />
          <Route path={paths.CREDITS} element={<Credits />} />
          <Route path={paths.REGISTER} element={<Register />}>
            <Route path={paths.register.STUDENT_CHECK} element={<StudentCheck />} />
            <Route path={paths.register.EMAIL_CHECK} element={<EmailCheck />} />
            <Route path={paths.register.ID_PW_REGISTER} element={<IdPwRegister />} />
            <Route path={paths.register.PROFILE_REGISTER} element={<ProfileRegister />} />
          </Route>
        </Routes>
        <ThemeButton />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
