import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { registerProcessState } from "atoms";
import { Title } from "components";
import { paths } from "consts";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

export default function StudentCheck() {
  const navigate = useNavigate();
  const setRegisterProcess = useSetRecoilState(registerProcessState);

  const answer = (isDKU: boolean) => {
    setRegisterProcess((prev) => ({ ...prev, isDKU }));
    navigate(paths.register.EMAIL_CHECK);
  };

  return (
    <>
      <Title>
        환영합니다!
        <br />
        단국대학교 학생이신가요?
      </Title>
      <AnswerButton onClick={() => answer(true)}>
        <ArrowIcon icon={faCaretRight} />
        　네　
      </AnswerButton>
      <AnswerButton onClick={() => answer(false)}>
        <ArrowIcon icon={faCaretRight} />
        아니요, 게스트로 가입하고 싶어요!
      </AnswerButton>
    </>
  );
}

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

const ArrowIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(-50%, -50%);

  width: 35px;
  height: 35px;
  color: gray;
`;
