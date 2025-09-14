import Login from '@/features/auth/signin/Login'
import { requireNoAuth } from '@/utils/guards'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/auth/Login')({
  component: Login,
  beforeLoad: requireNoAuth,
})
