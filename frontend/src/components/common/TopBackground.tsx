import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "storage";
import { dragDown } from "styles";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function TopBackground({ children }: Props) {
  const scrollPos = useRecoilValue(scrollPosState);

  return <Wrapper scrollPos={scrollPos}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ scrollPos: number }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.topBg};
  animation: ${dragDown} 0.8s ease;

  opacity: ${({ scrollPos }) => 50 / (scrollPos + 1)};
  transition: opacity 0.5s, background-color 1s;
`;
