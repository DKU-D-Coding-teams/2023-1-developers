import styled from "styled-components";
import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  path: string;
}

export default function Nav({ children, path }: PropsWithChildren<IProps>) {
  const navigate = useNavigate();

  const [isHighlighting, setHighlighting] = useState(false);

  useEffect(() => {
    if (isEqualPath()) {
      setHighlighting(true);
    }
  }, []);

  const handleButton = () => {
    if (!isEqualPath()) {
      navigate(path);
    }
  };

  const isEqualPath = () => {
    const currentLocation = window.location.pathname;

    return currentLocation === path;
  };

  return (
    <Wrapper highlight={isHighlighting}>
      <button onClick={handleButton}>{children}</button>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ highlight: boolean }>`
  width: 100%;
  margin-top: 30px;
  padding: 20px 0;
  color: lightgray;
  text-align: center;
  font-size: 14px;
  ${({ highlight }) => highlight && "background-color: gray"};
  transition: 1s;

  @media screen and (max-width: 750px) {
    padding: 0;
    ${({ highlight }) => highlight && "padding: 20px 0"}; // 하이라이트일 때 padding 애니메이션
    margin-top: 0;
    transition: 0.3s;
  }
`;
