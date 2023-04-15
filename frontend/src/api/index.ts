import axios from 'axios';
import { ProfileParams, RegisterParams } from './params';

// axios.defaults.baseURL = "http://3.39.41.33:8080";

export * from './params';

export const postEmailCheck = (email: string) => axios.post('/members/mailCheck', { email });

export const postMemberRegister = (data: RegisterParams) => axios.post('/members/join', data);

export const postMemberLogin = (email: string, password: string) => axios.post('/members/login', { email, password });

export const getAllProfiles = () => axios.get('/profiles/search/all');

export const postNewProfile = (img: string, profile: ProfileParams) => {
  const formData = new FormData();
  formData.append('images', img);
  formData.append('profile', JSON.stringify(profile));

  return axios.post('/profiles/new', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
