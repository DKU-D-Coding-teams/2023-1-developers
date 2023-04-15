import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  value: string;
  set: (value: string) => void;
}

export default function MarkdownTextarea({ value, set }: Props) {
  const [isPreviewMode, setPreviewMode] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    set(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Title>자유 자기소개 (마크다운 지원)</Title>
        <Textarea value={value} onChange={handleInput} />
        {isPreviewMode && (
          <PreviewBox>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
          </PreviewBox>
        )}
        <PreviewButton isPreviewMode={isPreviewMode} onClick={() => setPreviewMode(!isPreviewMode)}>
          미리보기
        </PreviewButton>
      </Wrapper>
    </>
  );
}

const PreviewButton = styled.button<{ isPreviewMode: boolean }>`
  position: absolute;
  top: -40px;
  right: 35px;
  width: 120px;
  height: 45px;
  line-height: 20px;
  padding-bottom: 40px;
  background-color: ${({ isPreviewMode }) => (isPreviewMode ? 'gray' : 'white')};
  transition: background-color 0.5s;
  text-align: center;
  border-radius: 30px;
  border: 1px solid gray;
`;

const Title = styled.div`
  position: absolute;
  top: -25px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  width: fit-content;
`;

const Textarea = styled(TextareaAutosize)`
  position: relative;
  z-index: 1;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  font-size: 1.1rem;
  font-family: 'SUIT-Regular';
  width: 80vw;
  min-height: 300px;
`;

const PreviewBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 20px;
  background-color: lightgray;
  font-size: 1.1rem;

  p {
    margin: 0;
  }
`;
