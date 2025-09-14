import type { UserRole } from '@/constants/UserRoleTypes'

export const getRedirectPathForRole = (
  role?: UserRole,
): any['to'] | undefined => {
  switch (role) {
    case 'CELEBRITY':
      return '/app/celebrities/dashboard'
    case 'BRAND':
    case 'INDIVIDUAL':
      return '/app/brands/profile'
    case 'ACCOUNT_MANAGER':
      return '/app/account-managers/profile'
    default:
      return '/404'
  }
}
