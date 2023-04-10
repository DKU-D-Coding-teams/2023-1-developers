import styled from "styled-components";

const TagBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  row-gap: 7px;
  div {
    height: 20px;
    line-height: 20px;
    background-color: darkgray;
    padding: 1px 4px;
    margin: 0 5px;
  }
`;

export default TagBox;