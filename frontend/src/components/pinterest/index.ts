import styled from 'styled-components';
import { pinterestFadeIn } from 'styles';

export const PinterestContainer = styled.div<{ onMain?: boolean }>`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 100px;

  max-width: 1100px;
  column-width: 300px;
  column-gap: 40px;
  padding: 0 20px;

  background-color: ${({ theme, onMain }) =>
    onMain ? theme.colors.mainPinterestContainer : theme.colors.boardPinterestContainer};
  transition: background-color 1s;
`;

export const PinterestObject = styled.div`
  display: inline-block;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  margin: 20px 0;
  cursor: pointer;

  animation: ${pinterestFadeIn} 1s ease-in-out;
`;
