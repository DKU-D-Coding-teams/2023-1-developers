import { ProfileForm, Title } from "components";

export default function ProfileRegister() {
  return (
    <>
      <Title>
        회원가입에 성공하였습니다.
        <br />
        당신은 어떤 사람인가요?
      </Title>

      <ProfileForm exceptDetailedIntroduce />
    </>
  );
}
