import { useRef, useState, MouseEvent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "atoms";

interface Props {
  selectedImg: string;
  close: () => void;
  uploadImg: (img: string) => void;
}

//! State 남용때문에 많이 비효율적인 컴포넌트... 남이 알아볼 수도 없다.
export default function ProfileImgUploadModal({ selectedImg, close, uploadImg }: Props) {
  const $screenshotArea = useRef<HTMLDivElement>();
  const $img = useRef<HTMLImageElement>();

  const scrollPos = useRecoilValue(scrollPosState);

  const AREA_LENGTH = 200;
  const [areaPosX, setAreaPosX] = useState(0);
  const [areaPosY, setAreaPosY] = useState(0);
  let [isDraggingArea, setIsDraggingArea] = useState(false);

  const dragScreenshotArea = (e: MouseEvent<HTMLDivElement>) => {
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
      // console.log($img.current);
    }
  };

  const captureArea = () => {
    $screenshotArea.current.style.opacity = "0";
    // $screenshotArea.current.appendChild($img.current);
    html2canvas(document.body, {
      x: areaPosX - AREA_LENGTH / 2,
      y: areaPosY + scrollPos - AREA_LENGTH / 2,
      width: AREA_LENGTH,
      height: AREA_LENGTH,
    }).then((canvas) => {
      const capturedImg = canvas.toDataURL("image/png");
      uploadImg(capturedImg);
      close();
    });
  };

  return (
    <>
      {selectedImg && (
        <>
          <Wrapper>
            <SelectedImg src={selectedImg} ref={$img} />
            <OKButton onClick={captureArea}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
            </OKButton>
          </Wrapper>
          <ScreenshotArea
            length={AREA_LENGTH}
            posX={areaPosX}
            posY={areaPosY}
            onMouseMove={dragScreenshotArea}
            onMouseDown={(e) => setIsDraggingArea(true)}
            onMouseUp={(e) => setIsDraggingArea(false)}
            ref={$screenshotArea}
          />
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 400px;

  padding: 30px;
  background-color: white;
  border: 1px solid gray;
`;

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
  z-index: 1;
  top: ${({ posY }) => posY + "px"};
  left: ${({ posX }) => posX + "px"};
  transform: translate(-50%, -50%);

  width: ${({ length }) => length + "px"};
  height: ${({ length }) => length + "px"};
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
