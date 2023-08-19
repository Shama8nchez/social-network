import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
  },
  withCredentials: true,
});

const profileAPI = {
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
  },

  setStatus(status) {
    return instance.put(`/profile/status`, {status})
  }
} 

export default profileAPI;