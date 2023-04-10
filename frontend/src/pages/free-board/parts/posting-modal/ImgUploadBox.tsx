import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface Props {
  images: string[];
  setImages: (images: string[]) => void;
}

export default function ImgUploadBox({ images, setImages }) {
  const uploadImages = function (e: ChangeEvent<HTMLInputElement>) {
    Object.values(e.target.files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
    });
    e.target.value = '';
  };

  const deleteImg = function (targetIndex) {
    setImages(images.filter((_, idx) => idx !== targetIndex));
  };

  return (
    <Wrapper>
      <Label>
        <>사진을 드래그 앤 드롭 또는 직접 업로드하세요...</>
        <input type="file" accept="image/*" onChange={uploadImages} multiple />
      </Label>
      {images.map((img, i) => (
        <Img src={img} alt="업로드한 이미지" key={i} onClick={() => deleteImg(i)} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;

  height: 70px;

  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-content: flex-start;

  overflow-x: scroll;
  overflow-y: hidden;
  border: 2px solid lightgray;

  gap: 10px;
`;

const Label = styled.label`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: darkgray;
  cursor: pointer;

  input {
    display: none;
  }
`;

const Img = styled.img`
  position: relative;
  z-index: 2;
  width: 60px;
  height: 60px;
  border: 2px solid gray;
  box-shadow: 3px 3px 10px -2px black;
  background-color: lightgray;

  &:hover {
    opacity: 0.7;
  }
`;
