import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

const RegisterPageTitle = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 50px;

  animation: ${waitAndDragUpFadeIn} 1.5s;
`;

export default RegisterPageTitle;
