import axios from 'axios';

const axiosClient = axios.create();

export const addToken = (token) => {
  if (token) {
    axios.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.headers.common['Authorization'];
  }
};

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
