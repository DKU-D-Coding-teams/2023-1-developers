import { PropsWithChildren, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { isModalActiveState } from 'storage';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  sibling: ReactNode;
}

export default function Modal({ width, height, sibling, children }: PropsWithChildren<Props>) {
  const [isModalActive, setModalActive] = useRecoilState(isModalActiveState);

  return (
    isModalActive && (
      <>
        <Background onClick={() => setModalActive(false)} />
        <Wrapper width={width} height={height}>
          {children}
        </Wrapper>
        {sibling}
      </>
    )
  );
}

const Background = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  transition: background-color 1s;
`;

const Wrapper = styled.div<{ width: string; height: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  padding: 30px;
  background-color: white;
  border: 1px solid gray;
`;
