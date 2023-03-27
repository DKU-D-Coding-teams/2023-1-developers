import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

const RegisterPageInput = styled.input<{ width?: string; height?: string; marginTop?: string }>`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop || "60px"};

  width: ${({ width }) => width || "300px"};
  height: 40px;
  line-height: 40px;
  padding: 10px;
  font-size: 20px;

  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2s;
`;

export default RegisterPageInput;
