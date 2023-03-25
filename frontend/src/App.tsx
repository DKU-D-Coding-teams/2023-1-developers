import { Routes, Route } from "react-router-dom";
import { GlobalStyle, lightTheme, darkTheme } from "styles";
import { Credits, Main, ProfileEdit, Register } from "pages";
import { paths } from "consts";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { scrollPosState } from "atoms";
import { throttle } from "lodash";
import styled, { ThemeProvider } from "styled-components";

export default function App() {
  const setScrollPos = useSetRecoilState(scrollPosState);
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle((e) => {
        setScrollPos(window.scrollY);
      }, 100)
    );
  }, []);

  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Routes>
          <Route path="*" element={<div> Not Found </div>} />
          <Route path={paths.MAINPAGE} element={<Main />} />
          <Route path={paths.PROFILE_EDIT} element={<ProfileEdit />} />
          <Route path={paths.CREDITS} element={<Credits />} />
          <Route path={paths.REGISTER} element={<Register />}>
            <Route path="student-check" element={<>안녕하세요! 단국대학교 학생이신가요?</>} />
          </Route>
        </Routes>

        <ThemeButton onClick={changeTheme}>
          <img src={isDarkTheme ? "/icons/sun.png" : "/icons/moon.png"} />
        </ThemeButton>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

const ThemeButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 100px;

  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.themeBtn};
  border-radius: 70%;

  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);

  opacity: 0.3;

  transition: opacity 0.3s, background-color 1s;

  img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-top: 3px;
  }

  &:hover {
    opacity: 1;
  }
`;
