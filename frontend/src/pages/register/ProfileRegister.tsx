import { RegisterPageTitle } from "components";

// TODO // pages/register에다가 계속 이렇게 할 건지, components/register로 옮길 건지
// TODO // 일단 pages/register에서 하다가 틀 잡히면 확실히 정해서 옮겨버리자.

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
