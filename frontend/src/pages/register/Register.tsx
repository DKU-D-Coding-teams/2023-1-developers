import { NavbarSection, TopBackground } from "components";
import { Outlet } from "react-router-dom";

export default function Register() {
  return (
    <NavbarSection>
      <TopBackground />
      <Outlet />
    </NavbarSection>
  );
}
