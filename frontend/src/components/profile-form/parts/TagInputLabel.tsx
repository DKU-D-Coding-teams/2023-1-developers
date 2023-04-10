import { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import InputLabel from "../../common/InputLabel";

interface Props {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagInputLabel({ tags, setTags }: Props) {
  const [buffer, setBuffer] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && buffer) {
      setTags([...tags, buffer]);
      setBuffer("");
      (e.target as HTMLInputElement).value = "";
    }
    if (e.key === "Backspace" && !buffer) {
      const currentTags = [...tags];
      currentTags.pop();
      setTags(currentTags);
    }
  };

  return (
    <>
      <InputLabel
        title="나를 표현하는 태그"
        width={600}
        marginTop={120}
        onChange={(e) => setBuffer(e.target.value.trim())}
        onKeyDown={handleKeyDown}
      >
        {tags.map((tag, idx) => (
          <Tag key={idx}>#{tag}</Tag>
        ))}
      </InputLabel>
    </>
  );
}

const Tag = styled.div`
  margin: 0 10px;
  height: 30px;
  line-height: 30px;
  padding: 5px;

  font-size: 20px;
  white-space: nowrap;
  background-color: gray;
  color: white;
  border-radius: 20px;
`;
