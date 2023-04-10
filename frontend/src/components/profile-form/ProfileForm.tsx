import { waitAndDragUpFadeIn } from 'styles';
import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { InputLabel, SubmitInput } from 'components';
import { MarkdownTextarea, ProfileImgUploadModal, TagInputLabel } from './parts';
import { useSetRecoilState } from 'recoil';
import { isModalActiveState } from 'storage';

interface Props {
  exceptsDetailedIntroduce?: boolean;
}

export default function ProfileForm({ exceptsDetailedIntroduce: exceptDetailedIntroduce }: Props) {
  const [selectedImg, setSelectedImg] = useState('');
  const [inputState, setInputState] = useState({
    uploadedImg: '',
    name: '',
    affiliation: '',
    singleIntroduce: '',
    githubLink: '',
    otherLink: '',
    tags: [],
    detailedIntroduce: '',
  });
  const setModalActive = useSetRecoilState(isModalActiveState);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputState);
  };

  const runImgUploader = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedImg(reader.result as string);
      setModalActive(true);
    };
    e.target.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProfileImgUploadModal
        selectedImg={selectedImg}
        uploadImg={(img: string) => setInputState({ ...inputState, uploadedImg: img })}
      />
      <FlexBox>
        <ProfileImgLabel>
          <ProfileImg src={inputState.uploadedImg || '/icons/person.png'} />
          <ProfileImgBtnBox>프로필 사진 등록</ProfileImgBtnBox>
          <input type="file" accept="image/*" onChange={runImgUploader} />
        </ProfileImgLabel>
        <div>
          <InputLabel name="name" title="이름" onChange={handleInput} />
          <InputLabel name="affiliation" title="소속/학번" onChange={handleInput} marginTop={30} />
        </div>
      </FlexBox>

      <InputLabel name="githubLink" title="깃허브 링크" onChange={handleInput} width={500} marginTop={120} />

      <InputLabel name="otherLink" title="기타(블로그 등) 링크" onChange={handleInput} width={500} marginTop={40} />

      <InputLabel name="singleIntroduce" title="한줄 소개" onChange={handleInput} width={700} marginTop={120} />

      <TagInputLabel tags={inputState.tags} setTags={(tags) => setInputState({ ...inputState, tags })} />

      <MarkdownTextarea
        value={inputState.detailedIntroduce}
        set={(detailedIntroduce: string) => setInputState({ ...inputState, detailedIntroduce })}
      />

      <SubmitInput type="submit" value="제출" warning="" />
    </form>
  );
}

const FlexBox = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  gap: 100px;
  width: fit-content;
`;

const ProfileImgLabel = styled.label`
  position: relative;
  width: 160px;
  animation: ${waitAndDragUpFadeIn} 2.3s;
  cursor: pointer;

  input {
    display: none;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 40px;
  background-color: gray;
`;

const ProfileImgBtnBox = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid gray;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.defaultFont};
`;
