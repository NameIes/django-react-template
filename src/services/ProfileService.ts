import { instance } from "../config/api.config"

const ProfileService = {
  getMe() {
    return instance.get('/auth/user/');
  }
}

export default ProfileService
