import axios from "axios";

// const API_BASE = 'http://localhost:3306/api';
// const API_BASE = 'https://react-portfolio-admin.onrender.com/api';
const API_BASE = 'https://react-portfolioadmin-production.up.railway.app/api';

const axiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  projects: {
    getAll: () => axiosInstance.get('/projects'),
    getOne: (name) => axiosInstance.get(`/projects/${encodeURIComponent(name)}`),
    create: (data) => axiosInstance.post('/projects', data),
    update: (name, data) => axiosInstance.put(`/projects/${encodeURIComponent(name)}`, data),
    delete: (name) => axiosInstance.delete(`/projects/${encodeURIComponent(name)}`)
  },
  skills: {
    getAll: () => axiosInstance.get('/skills'),
    create: (data) => axiosInstance.post('/skills', data),
    delete: (name) => axiosInstance.delete(`/skills/${encodeURIComponent(name)}`)
  }
};