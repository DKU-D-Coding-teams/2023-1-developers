import { keyframes } from "styled-components";

export const dragDown = keyframes`
  from {
    height: 1px;
  }
`;

export const pinterestFadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 100px;
  }
  to {
    opacity: 1;
  }
`;

// TODO : keyframes를 함수로 만들지 말라는 법은 없다.
// TODO : 함수로 만들어서 좀 더 유동적으로 쓸 수 있게 해보자.
// 기다렸다가 올리면서 페이드 인
export const waitAndDragUpFadeIn = keyframes`
  0% {
    top: 100px;
    opacity: 0;
  }
  50% {
    top: 100px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
`;

export const shakeHorizontal = keyframes`
  0% {
    transform: translate(-70px, 0);
  }
  20% {
    transform: translate(70px, 0);
  }
  40% {
    transform: translate(-50px, 0);
  }
  60% {
    transform: translate(50px, 0);
  }
  80% {
    transform: translate(-30px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;
