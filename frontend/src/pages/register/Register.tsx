import { TopBackground } from "components";
import { Outlet } from "react-router-dom";

export default function Register() {
  return (
    <>
      <TopBackground />
      <Outlet />
    </>
  );
}
