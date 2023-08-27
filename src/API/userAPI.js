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

  changePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      'Content-Type': 'multipart/form-data'
    })
  },

  updateUser(userId,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    github,
    vk,
    facebook,
    instagram,
    twitter,
    website,
    youtube,
    mainLink) {
      return instance.put('profile/', {
        aboutMe: 'aboutMe',
        userId,
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts: {
          github,
          vk,
          facebook,
          instagram,
          twitter,
          website,
          youtube,
          mainLink
        }
        
      })
    }
} 

export default userAPI;