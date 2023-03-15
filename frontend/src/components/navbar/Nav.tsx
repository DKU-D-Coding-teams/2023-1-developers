import styled from "styled-components";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  path: string;
}

export default function Nav({ children, path }: PropsWithChildren<IProps>) {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(path);
  };

  return (
    <Wrapper>
      <button onClick={handleButton}>{children}</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  color: lightgray;
  text-align: center;
  font-size: 14px;
`;
