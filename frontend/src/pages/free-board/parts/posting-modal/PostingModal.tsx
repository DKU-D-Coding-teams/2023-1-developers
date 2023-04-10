import { Modal } from 'components';
import styled from 'styled-components';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import ImgUploadBox from './ImgUploadBox';

export default function PostingModal() {
  const [inputState, setInputState] = useState({
    title: '',
    content: '',
    images: [],
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  return (
    <Modal width="350px" height="550px">
      <TitleInput placeholder="제목" onChange={handleInput} />
      <ContentTextarea placeholder="내용" onChange={handleInput} />
      <ImgUploadBox
        images={inputState.images}
        setImages={(images: string[]) => setInputState({ ...inputState, images })}
      />
      <UploadButton>올리기</UploadButton>
    </Modal>
  );
}

const TitleInput = styled.input`
  padding: 10px;
  border-bottom: 2px solid lightgray;
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
`;

const ContentTextarea = styled.textarea`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid lightgray;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  font-size: 1.1rem;
  font-family: 'SUIT-Regular';
`;

const UploadButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 15px;

  border: 2px solid lightgray;
  width: 100px;
  height: 60px;
  font-size: 1.1rem;
  text-align: center;

  &:hover {
    border-color: gray;
  }
`;
