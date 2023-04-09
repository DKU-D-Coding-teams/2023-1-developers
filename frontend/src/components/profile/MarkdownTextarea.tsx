import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { ChangeEvent, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  value: string;
  set: (value: string) => void;
}

export default function MarkdownTextarea({ value, set }: Props) {
  const [isEditMode, setEditMode] = useState(true);

  let editTimeout: NodeJS.Timeout;

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    set(e.target.value);
  };

  const activeEditMode = () => {
    setEditMode(true);
    clearTimeout(editTimeout);
    editTimeout = setTimeout(() => setEditMode(false), 1000);
  };

  return (
    <>
      <Wrapper>
        <Textarea onChange={handleInput} onKeyDown={activeEditMode} onMouseDown={activeEditMode} />
        {!isEditMode && value && (
          <PreviewBox>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
          </PreviewBox>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  width: fit-content;
`;

const Textarea = styled(TextareaAutosize)`
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  font-size: 1.1rem;
  font-family: "SUIT-Regular";
  width: 80vw;
  min-height: 300px;
`;

const PreviewBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 20px;
  font-size: 1rem;
  background-color: lightgray;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  white-space: normal;

  pointer-events: none;

  p {
    margin: 0;
  }
`;
