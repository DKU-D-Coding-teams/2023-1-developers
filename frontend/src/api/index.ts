import axios from 'axios';
import { LoginToken, ProfileWithoutImg, RegisterInfo } from './interfaces';
import { dataURLtoBlob } from 'utils';

axios.defaults.baseURL = 'http://13.209.229.205:8080';

export * from './interfaces';

export const postEmailCheck = (email: string) => axios.post('/members/mailCheck', { email });

export const postMemberRegister = (data: RegisterInfo) => axios.post('/members/join', data);

export const postMemberLogin = (email: string, password: string) => axios.post('/members/login', { email, password });

export const postNewProfile = (img: string, profile: ProfileWithoutImg, loginToken: LoginToken) => {
  const formData = new FormData();

  const imgBlob = new Blob([dataURLtoBlob(img)], { type: 'multipart/form-data' });
  formData.append('images', imgBlob);

  const profileBlob = new Blob([JSON.stringify(profile)], { type: 'application/json' });
  formData.append('profile', profileBlob);

  return axios.post('/profiles/new', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${loginToken.grantType} ${loginToken.accessToken}`,
    },
  });
};

// TODO 이거 profileId parameters 보내야 함
export const postUpdateProfile = (
  profileId: number,
  img: string,
  profile: ProfileWithoutImg,
  loginToken: LoginToken
) => {
  const formData = new FormData();

  const imgBlob = new Blob([dataURLtoBlob(img)], { type: 'multipart/form-data' });
  formData.append('images', imgBlob);

  const profileBlob = new Blob([JSON.stringify(profile)], { type: 'application/json' });
  formData.append('profile', profileBlob);

  return axios.post(`/profiles/update/${profileId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${loginToken.grantType} ${loginToken.accessToken}`,
    },
  });
};

export const postNewComment = (profileId: number, content: string, loginToken: LoginToken) =>
  axios.post(
    `/comments/new/${profileId}`,
    { content },
    {
      headers: {
        Authorization: `${loginToken.grantType} ${loginToken.accessToken}`,
      },
    }
  );

export const postDeleteComment = (commentId: number, loginToken: LoginToken) =>
  axios.post(
    `/comments/delete/${commentId}`,
    { commentId },
    {
      headers: {
        Authorization: `${loginToken.grantType} ${loginToken.accessToken}`,
      },
    }
  );

export const postReplyComment = (commentId: number, content: string, loginToken: LoginToken) =>
  axios.post(
    `/comments/reply/new/${commentId}`,
    { content },
    {
      headers: {
        Authorization: `${loginToken.grantType} ${loginToken.accessToken}`,
      },
    }
  );

export const postUpdateComment = (commentId: number) => axios.post(`/comments/update/${commentId}`, { commentId });

export const getAllProfiles = (loginToken: LoginToken) =>
  axios.get('/profiles/search/all', {
    timeout: 2000,
  });

export const getDetailedProfile = (profileId: number, loginToken: LoginToken) =>
  axios.get(`/profiles/details/${profileId}`, {
    timeout: 2000,
  });
