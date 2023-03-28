import { TopBackground, TopBar } from "components";
import { Outlet } from "react-router-dom";

export default function Register() {
  return (
    <>
      <TopBar />
      <TopBackground />
      <Outlet />
    </>
  );
}
