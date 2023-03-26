import { RegisterPageTitle } from "components";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

export default function IdPwRegister() {
  return (
    <>
      <RegisterPageTitle>사용할 아이디와 비밀번호를 입력해 주세요.</RegisterPageTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label>
          <p>아이디</p>
          <input />
        </Label>

        <Label>
          <p>비밀번호</p>
          <input />
        </Label>

        <Label>
          <p>비밀번호 재입력</p>
          <input />
        </Label>

        <SubmitInput type="submit" value="제출" />
      </form>
    </>
  );
}

const Label = styled.label`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 70px;
  width: fit-content;

  animation: ${waitAndDragUpFadeIn} 2s;

  p {
    display: inline;
    margin-right: 50px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.defaultFont};
    transition: color 1s;
  }

  input {
    height: 40px;
    line-height: 40px;

    padding: 10px;
    font-size: 20px;

    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 40px;
  }
`;

const SubmitInput = styled.input`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 100px;

  width: 130px;
  height: 70px;
  font-size: 22px;

  color: white;
  background-color: skyblue;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2.3s;
`;
