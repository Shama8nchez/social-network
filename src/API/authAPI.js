import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
  },
  withCredentials: true,
});

const authAPI = {
  setAuthUser() {
    return instance.get('auth/me');
  },

  login(email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe});
  },

  logout() {
    return instance.delete('auth/login');
  }
} 

export default authAPI;