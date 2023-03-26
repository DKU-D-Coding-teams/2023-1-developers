import styled from "styled-components";
import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  path: string;
}

export default function Nav({ children, path }: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHighlighting, setHighlighting] = useState(false);

  useEffect(() => {
    if (location.pathname === path) {
      setHighlighting(true);
    }
  }, []);

  const navigatePage = () => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <Wrapper highlight={isHighlighting}>
      <button onClick={navigatePage}>{children}</button>
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
  ${({ highlight, theme }) => highlight && "background-color:" + theme.colors.navbarHighlight};
  transition: 1s;

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
    ${({ highlight }) => highlight && "padding: 20px 0"}; // 하이라이트일 때 padding 애니메이션
    margin-top: 0;
    transition: 0.3s;
  }
`;
