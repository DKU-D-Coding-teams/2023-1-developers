import { InputHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  marginTop?: number;
  width?: number;
  title?: string;
}

export default function InputLabel({ marginTop, width, title, children, ...props }: PropsWithChildren<Props>) {
  return (
    <Label marginTop={marginTop || 0}>
      <Title>{title}</Title>
      <InputBox width={width || 300}>
        {children}
        <Input {...props} />
      </InputBox>
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

const InputBox = styled.div<{ width: number }>`
  position: relative;
  display: flex;
  align-items: center;

  width: ${({ width }) => width + "px"};

  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 40px;
`;

const Input = styled.input`
  position: relative;
  display: block;

  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 10px;
  font-size: 20px;

  background-color: transparent;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.defaultFont};
`;
