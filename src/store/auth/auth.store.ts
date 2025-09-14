import type { UserRole } from '@/constants/UserRoleTypes'
import { getAccessToken } from '@/services/api.service'
import { BaseStore } from '../base.store'
// import repository from '../../repositories/[name].repository';

export interface ICurrentUser {
  name: string
  role: string
  email: string
  roles: { roleType: UserRole; isPrimary: boolean }[]
}

export interface IAuthState {
  isAuthenticated: boolean
  currentUser?: ICurrentUser
  isLookingUpUser: boolean
}

class StoreProvider extends BaseStore<IAuthState> {
  constructor() {
    super({
      // Initialize state here
      currentUser: undefined,
      isAuthenticated: false,
      isLookingUpUser: false,
    })

    this.store.subscribe((state) => this.listen(state))
  }

  // Define your methods here

  login = async () => {
    await new Promise((res) => setTimeout(res, 3000))
    this.set({ isAuthenticated: true })
  }

  lookupCurrentUser = async () => {
    this.set({ isLookingUpUser: true })
    try {
      const token = getAccessToken()
      // if (!token) {
      //   throw new Error('No access token found')
      // }
      // const currentUser = await authRepository.getCurrentUser()

      // this.set({
      //   isAuthenticated: true,
      //   isLookingUpUser: false,
      //   currentUser: currentUser,
      // })
    } catch (e) {
      this.set({
        isAuthenticated: false,
        isLookingUpUser: false,
      })
      throw e
    }
  }

  listen = (state: IAuthState) => {
    if (state.isAuthenticated) {
      this.set({ isAuthenticated: false })
    }
  }
}

const storeProvider = new StoreProvider()
export default storeProvider
