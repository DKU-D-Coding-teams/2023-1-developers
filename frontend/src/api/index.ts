import axios from 'axios';
import { DetailedProfile, LoginToken, Profile, ProfileWithoutImg, RegisterInfo } from './interfaces';
import { profilesMockData } from 'mocks';
import { useLocalStorage } from 'usehooks-ts';
import { dataURLtoBlob } from 'utils';

// axios.defaults.baseURL = "http://3.39.41.33:8080";

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
export const postUpdateProfile = (profileId: number, img: string, profile: ProfileWithoutImg) => {
  const formData = new FormData();
  formData.append('images', img);
  formData.append('profile', JSON.stringify(profile));

  return axios.post(`/profiles/update/${profileId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const postNewComment = (profileId: number) => axios.post(`/comments/new/${profileId}`, { profileId });

export const postDeleteComment = (commentId: number) => axios.post(`/comments/delete/${commentId}`, { commentId });

export const postReplyComment = (commentId: number) => axios.post(`/comments/reply/new/${commentId}`, { commentId });

export const postUpdateComment = (commentId: number) => axios.post(`/comments/update/${commentId}`, { commentId });

export const getAllProfiles = (loginToken: LoginToken) =>
  axios.get('/profiles/search/all', {
    timeout: 2000,
  });

export const getDetailedProfile = (profileId: number, loginToken: LoginToken) =>
  axios.get(`/profiles/details/${profileId}`, {
    timeout: 2000,
  });
