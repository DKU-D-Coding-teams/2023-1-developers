import { InputLabel, Modal } from 'components';
import styled from 'styled-components';

export default function PostingModal() {
  return (
    <Modal width="350px" height="550px">
      <TitleInput placeholder="제목" />
      <ContentTextarea placeholder="내용" />
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
  margin-top: 30px;

  border: 2px solid lightgray;
  width: 100px;
  height: 60px;
  font-size: 1.1rem;
  text-align: center;

  &:hover {
    border-color: gray;
  }
`;
