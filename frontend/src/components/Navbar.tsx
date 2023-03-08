import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <div>MainPage</div>
      <div>Account</div>
      <div>My Profile</div>
      <div>Credits</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: #3c3c3c;
  > * {
    margin-top: 50px;
    color: lightgray;
    font-size: 14px;
  }
`;
