import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

//TODO TypeScript의 장점을 전혀 활용하지 못 하고 있다. 페이먼츠 참고해서 타입체크라도 추가해보자.
export default function RegisterInputLabel(props: any) {
  return (
    <Label marginTop={props.marginTop}>
      <P>{props.text}</P>
      <Input width={props.width} {...props} />
    </Label>
  );
}

const P = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;

const Label = styled.label<{ marginTop?: string }>`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};
  width: fit-content;

  animation: ${waitAndDragUpFadeIn} 2s;
`;

const Input = styled.input<{ width?: string }>`
  position: relative;
  display: block;

  width: ${({ width }) => width || "300px"};
  height: 50px;
  line-height: 50px;
  padding: 10px;
  font-size: 20px;

  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 40px;
`;
