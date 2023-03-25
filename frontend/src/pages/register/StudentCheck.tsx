import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

export default function StudentCheck() {
  return (
    <>
      <Title>
        환영합니다!
        <br />
        단국대학교 학생이신가요?
      </Title>
      <AnswerButton>
        <Triangle />
        　네　
      </AnswerButton>
      <AnswerButton>
        <Triangle />
        아니요, 게스트로 가입하고 싶어요!
      </AnswerButton>
    </>
  );
}

const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 50px;

  animation: ${waitAndDragUpFadeIn} 1.5s;
`;

const AnswerButton = styled.button`
  display: block;
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  width: fit-content;
  padding: 30px;

  font-size: 1.2rem;

  height: 10px;
  line-height: 10px;

  border: 1px solid gray;

  text-align: center;

  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  animation: ${waitAndDragUpFadeIn} 2s;
`;

const Triangle = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 20px solid #c8d7d8;
  border-right: 20px solid transparent;
`;
