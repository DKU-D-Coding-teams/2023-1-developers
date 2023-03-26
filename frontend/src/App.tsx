import { Routes, Route } from "react-router-dom";
import { GlobalStyle, lightTheme, darkTheme } from "styles";
import { Credits, Main, ProfileEdit, Register, StudentCheck, ProfileRegister, IdPwRegister } from "pages";
import { paths } from "consts";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkThemeState, scrollPosState } from "atoms";
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
            <Route path="student-check" element={<StudentCheck />} />
            <Route path="profile" element={<ProfileRegister />} />
            <Route path="id-pw" element={<IdPwRegister />} />
          </Route>
        </Routes>
        <ThemeButton />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
