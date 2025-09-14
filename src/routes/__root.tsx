/* eslint-disable react-hooks/exhaustive-deps */
import {
  Navigate,
  Outlet,
  createRootRoute,
  useLocation,
  useNavigate,
} from '@tanstack/react-router'
import { Suspense, useEffect } from 'react'

import authStoreProvider from '../store/auth/auth.store'

import { PUBLIC_ROUTES } from '@/constants/routes'
import NotFoundPage from '@/features/NotFoundPage'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

export default function RootLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const authStore = authStoreProvider.useStore()

  const { currentUser, isAuthenticated } = authStore
  const normalizedPathname = location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname
  const isPublicPath = PUBLIC_ROUTES.some((route) => {
    const normalizedRoute = route.endsWith('/') ? route.slice(0, -1) : route
    return normalizedPathname === normalizedRoute
  })

  useEffect(() => {
    authStoreProvider.lookupCurrentUser().catch(() => {})
  }, [isAuthenticated])

  useEffect(() => {
    if (currentUser) {
      navigateUser()
    }
  }, [currentUser])

  const navigateUser = async () => {
    if (!currentUser && !isAuthenticated)
      return navigate({ to: '/app/auth/Login' })

    if (!currentUser && !isPublicPath)
      return navigate({ to: '/app/auth/Login' }) // not found page can be added

    if (currentUser && isPublicPath) {
      return Navigate({ to: '/' })
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  )
}
