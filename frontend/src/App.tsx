import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Credits, Main, ProfileEdit, Register } from "pages";
import { paths } from "consts";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<div> Not Found </div>} />
        <Route path={paths.MAINPAGE} element={<Main />} />
        <Route path={paths.REGISTER} element={<Register />} />
        <Route path={paths.PROFILE_EDIT} element={<ProfileEdit />} />
        <Route path={paths.CREDITS} element={<Credits />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
