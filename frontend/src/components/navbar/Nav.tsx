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
  margin-top: 50px;
  color: lightgray;
  text-align: center;
  font-size: 14px;
  ${({ highlight }) => highlight && "background-color: white"};
`;
