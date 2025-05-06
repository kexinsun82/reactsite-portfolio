import axios from "axios";

const API_BASE = 'http://localhost:3306/api';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.url); // 添加请求日志
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status); // 添加响应日志
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response || error);
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