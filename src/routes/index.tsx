import Dashboard from '@/features/dashboard/dashboard'
import NotFoundPage from '@/features/NotFoundPage'
import { requireAuth } from '@/utils/guards'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Dashboard,
  notFoundComponent: NotFoundPage,
  beforeLoad: requireAuth,
})
