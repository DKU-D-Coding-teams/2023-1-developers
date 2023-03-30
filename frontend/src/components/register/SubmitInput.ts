import styled from "styled-components";
import { waitAndDragUpFadeIn } from "styles";

const SubmitInput = styled.input`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 60px;

  width: 130px;
  height: 70px;
  font-size: 22px;

  color: white;
  background-color: skyblue;
  border-radius: 40px;

  animation: ${waitAndDragUpFadeIn} 2.3s;
`;

export default SubmitInput;
