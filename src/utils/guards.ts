import { PUBLIC_ROUTES } from '@/constants/routes'
import type { UserRole } from '@/constants/UserRoleTypes'
import { redirect } from '@tanstack/react-router'
import authStoreProvider from '../store/auth/auth.store'
import { getRedirectPathForRole } from './common.utils'

export async function requireAuth() {
  const { isAuthenticated, isLookingUpUser } = authStoreProvider.state

  // If user lookup has not started, trigger it
  if (!isLookingUpUser) {
    await authStoreProvider.lookupCurrentUser()
  }

  // After lookup, check if authenticated
  if (!isAuthenticated) {
    throw redirect({ to: '/app/auth/Login' })
  }

  // If authenticated, allow route
  return
}

export async function requireNoAuth() {
  const { isAuthenticated } = authStoreProvider.state

  // After lookup, check if authenticated''

  const normalizedPathname = location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname

  const isPublicPath = PUBLIC_ROUTES.some((route) => {
    const normalizedRoute = route.endsWith('/') ? route.slice(0, -1) : route
    return normalizedPathname === normalizedRoute
  })
  if (isAuthenticated && isPublicPath) {
    throw redirect({ to: '/' })
  }

  // If authenticated, allow route
  return
}

export async function requireRoleAccess(role: UserRole) {
  await requireAuth()
  const { currentUser } = authStoreProvider.state
  const hasRequiredRole = currentUser?.roles.find((r) => r.roleType === role)
  const primaryRole = currentUser?.roles.find((role) => role.isPrimary)

  if (!hasRequiredRole && primaryRole?.roleType) {
    throw redirect({ to: getRedirectPathForRole(primaryRole.roleType) })
  }

  return
}
