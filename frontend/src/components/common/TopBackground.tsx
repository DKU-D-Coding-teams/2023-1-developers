import styled, { keyframes } from "styled-components";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "atoms";

export default function TopBackground({ children }) {
  const scrollPos = useRecoilValue(scrollPosState);

  return <Wrapper scrollPos={scrollPos}>{children}</Wrapper>;
}

const dragDown = keyframes`
  from {
    height: 1px;
  }
`;

const Wrapper = styled.div<{ scrollPos: number }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.topBg};
  animation: ${dragDown} 0.8s ease;

  opacity: ${({ scrollPos }) => 50 / (scrollPos + 1)};
  transition: opacity 0.5s, background-color 1s;
`;
