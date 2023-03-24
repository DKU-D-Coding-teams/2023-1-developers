import { Routes, Route } from "react-router-dom";
import { GlobalStyle, lightTheme } from "styles";
import { Credits, Main, ProfileEdit, Register } from "pages";
import { paths } from "consts";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { scrollPosState } from "atoms";
import { throttle } from "lodash";
import { ThemeProvider } from "styled-components";

function App() {
  const setScrollPos = useSetRecoilState(scrollPosState);

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
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="*" element={<div> Not Found </div>} />
          <Route path={paths.MAINPAGE} element={<Main />} />
          <Route path={paths.REGISTER} element={<Register />} />
          <Route path={paths.PROFILE_EDIT} element={<ProfileEdit />} />
          <Route path={paths.CREDITS} element={<Credits />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
