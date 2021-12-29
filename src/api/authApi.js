import axiosClient from './axiosClient';

const authApi = {
  login: (data) =>
    axiosClient.post('http://localhost:3000/api/auth/login', data),
  register: (data) =>
    axiosClient.post('http://localhost:3000/api/auth/register', data),
  checkLogin: () => axiosClient.get('http://localhost:3000/api/auth'),
};

export default authApi;
