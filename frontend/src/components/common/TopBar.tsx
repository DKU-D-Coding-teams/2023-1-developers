import styled, { keyframes, css } from "styled-components";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "atoms";
import { dragDown } from "styles";

export default function TopBar() {
  const scrollPos = useRecoilValue(scrollPosState);

  return <Wrapper scrollPos={scrollPos}>D-velopers</Wrapper>;
}

const Wrapper = styled.div<{ scrollPos: number }>`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.titleFont};
  z-index: 1;

  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;

  box-shadow: 0px 5px 25px -5px rgba(0, 0, 0, 0.3);

  display: none;
  animation: ${dragDown} 0.3s ease-in-out;

  ${({ scrollPos }) => {
    if (scrollPos > 300) {
      return css`
        display: block;
      `;
    }
  }}
`;
