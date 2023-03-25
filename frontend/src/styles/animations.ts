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
