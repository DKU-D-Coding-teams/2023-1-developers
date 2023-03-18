import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Main, ProfileEdit, Register } from "@/pages";
import { paths } from "@/constants";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<div> Not Found </div>} />
        <Route path={paths.MAINPAGE} element={<Main />} />
        <Route path={paths.REGISTER} element={<Register />} />
        <Route path={paths.PROFILE_EDIT} element={<ProfileEdit />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
