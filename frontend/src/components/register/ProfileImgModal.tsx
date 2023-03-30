import styled from "styled-components";

interface Props {
  img: string;
  modalState: boolean;
}

export default function ProfileImgModal({ img, modalState }: Props) {
  return (
    <>
      {modalState && (
        <Wrapper>
          <img src={img} />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  height: fit-content;

  padding: 30px;
  background-color: white;
  border: 1px solid gray;
`;
