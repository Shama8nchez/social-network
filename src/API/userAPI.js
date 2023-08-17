import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
  },
  withCredentials: true,
});

const userAPI = {
  getUsers(page = 1) {
    return instance.get(`users?page=${page}`)
  },

  getUser(userId) {
    return instance.get('profile/' + userId)
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  },

  setAuthUser() {
    return instance.get('auth/me')
  },
} 

export default userAPI;