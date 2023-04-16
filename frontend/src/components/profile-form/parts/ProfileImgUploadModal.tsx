import { useRef, useState, MouseEvent, TouchEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import { Modal } from 'components';
import { useSetRecoilState } from 'recoil';
import { isModalActiveState } from 'storage';

interface Props {
  selectedImg: string;
  uploadImg: (img: string) => void;
}

//! State 남용때문에 많이 비효율적인 컴포넌트...
export default function ProfileImgUploadModal({ selectedImg, uploadImg }: Props) {
  const $screenshotArea = useRef<HTMLDivElement>();
  const $img = useRef<HTMLImageElement>();

  const AREA_LENGTH = 200;
  const [areaPosX, setAreaPosX] = useState(0);
  const [areaPosY, setAreaPosY] = useState(0);
  let [isDraggingArea, setIsDraggingArea] = useState(false);
  const setModalActive = useSetRecoilState(isModalActiveState);

  // TODO 나중에 여유되면 핸드폰 터치 이벤트도 추가하자.
  const dragScreenshotArea = (e: MouseEvent<HTMLDivElement> & TouchEvent<HTMLDivElement>) => {
    if (isDraggingArea) {
      const rect = $img.current.getBoundingClientRect();
      setAreaPosX(e.clientX);
      setAreaPosY(e.clientY);
      if (e.clientX < rect.left + AREA_LENGTH / 2) {
        setAreaPosX(rect.left + AREA_LENGTH / 2);
      }
      if (e.clientX > rect.right - AREA_LENGTH / 2) {
        setAreaPosX(rect.right - AREA_LENGTH / 2);
      }
      if (e.clientY > rect.bottom - AREA_LENGTH / 2) {
        setAreaPosY(rect.bottom - AREA_LENGTH / 2);
      }
      if (e.clientY < rect.top + AREA_LENGTH / 2) {
        setAreaPosY(rect.top + AREA_LENGTH / 2);
      }
    }
  };

  const captureArea = () => {
    $screenshotArea.current.style.opacity = '0';
    html2canvas(document.body, {
      x: areaPosX - AREA_LENGTH / 2,
      y: areaPosY + window.scrollY - AREA_LENGTH / 2,
      width: AREA_LENGTH,
      height: AREA_LENGTH,
    }).then((canvas) => {
      const capturedImg = canvas.toDataURL('image/png');
      uploadImg(capturedImg);
      setModalActive(false);
    });
  };

  return (
    <>
      <Modal
        width="300px"
        height="400px"
        sibling={
          <ScreenshotArea
            length={AREA_LENGTH}
            posX={areaPosX}
            posY={areaPosY}
            onMouseMove={dragScreenshotArea}
            onMouseDown={(e) => setIsDraggingArea(true)}
            onMouseUp={(e) => setIsDraggingArea(false)}
            ref={$screenshotArea}
          />
        }
      >
        <SelectedImg src={selectedImg} ref={$img} />
        <OKButton type="button" onClick={captureArea}>
          <FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />
        </OKButton>
      </Modal>
    </>
  );
}

const SelectedImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 280px;
  height: 300px;
  object-fit: contain;
  background-color: black;
`;

const ScreenshotArea = styled.div<{ posX: number; posY: number; length: number }>`
  position: fixed;
  z-index: 99;
  top: ${({ posY }) => (posY ? posY + 'px' : '50%')};
  left: ${({ posX }) => (posX ? posX + 'px' : '50%')};
  transform: translate(-50%, -50%);

  width: ${({ length }) => length + 'px'};
  height: ${({ length }) => length + 'px'};
  background-color: black;
  opacity: 0.4;
  border-radius: 40px;

  cursor: move;
`;

const OKButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 30px;

  width: 70px;
  height: 60px;
  font-size: 2rem;
  text-align: center;
  background-color: lightgreen;
`;
