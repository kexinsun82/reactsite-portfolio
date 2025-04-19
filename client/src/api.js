import axios from "axios";

const API_BASE = 'https://expressjs-g7y5.onrender.com/api';

export default {
  projects: {
    getAll: () => axios.get(`${API_BASE}/projects`),
    create: (data) => axios.post(`${API_BASE}/projects`, data),
    update: (name, data) => axios.put(`${API_BASE}/projects/${name}`, data),
    delete: (name) => axios.delete(`${API_BASE}/projects/${name}`)
  },
  skills: {
    getAll: () => axios.get(`${API_BASE}/skills`),
    create: (data) => axios.post(`${API_BASE}/skills`, data),
    delete: (name) => axios.delete(`${API_BASE}/skills/${name}`)
  }
};