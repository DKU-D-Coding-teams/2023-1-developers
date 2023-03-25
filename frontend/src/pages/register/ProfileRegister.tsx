import { RegisterPageTitle } from "components";
import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

export default function ProfileRegister() {
  return (
    <>
      <RegisterPageTitle>
        회원가입에 성공하였습니다.
        <br />
        당신은 어떤 사람인가요?
      </RegisterPageTitle>
    </>
  );
}
