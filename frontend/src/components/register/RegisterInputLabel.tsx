import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  marginTop?: number;
  width?: number;
  text?: string;
}

export default function RegisterInputLabel({ marginTop, width, text, ...props }: Props) {
  return (
    <Label marginTop={marginTop || 0}>
      <P>{text}</P>
      <Input width={width || 300} {...props} />
    </Label>
  );
}

const Label = styled.label<{ marginTop: number }>`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop + "px"};
  width: fit-content;

  animation: ${waitAndDragUpFadeIn} 2s;
`;

const Input = styled.input<{ width: number }>`
  position: relative;
  display: block;

  width: ${({ width }) => width + "px"};
  height: 50px;
  line-height: 50px;
  padding: 10px;
  font-size: 20px;

  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 40px;
`;

const P = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;
