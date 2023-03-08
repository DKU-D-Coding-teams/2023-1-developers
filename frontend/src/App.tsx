import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Main, ProfileEdit, Register } from "pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<div> Not Found </div>} />
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
