import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { waitAndDragUpFadeIn, shakeHorizontal } from 'styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  warning: string;
}

export default function SubmitInput({ warning, ...props }: Props) {
  return <>{warning ? <Warning>{warning}</Warning> : <Input {...props} />}</>;
}

const Input = styled.input`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 60px;

  max-width: 200px;
  min-width: 130px;
  height: 70px;
  font-size: 22px;

  color: white;
  background-color: skyblue;
  border-radius: 40px;

  text-align: center;

  cursor: pointer;

  animation: ${waitAndDragUpFadeIn} 2.3s;
`;

const Warning = styled.div`
  margin: 0 auto;
  margin-top: 60px;

  color: white;

  width: fit-content;
  padding: 20px;
  border-radius: 20px;
  background-color: lightcoral;

  animation: ${shakeHorizontal} 0.4s;
`;
