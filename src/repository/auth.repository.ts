import apiService from '../services/api.service'

import { Endpoints } from '@/constants/Endpoint'

class AuthRepository {
  async getCurrentUser() {
    const response = await apiService.get(Endpoints.AUTH.USER_LOOKUP)
    return response.data.data
  }
}
const authRepository = new AuthRepository()
export default authRepository
