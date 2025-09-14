import { toaster } from '@/components/ui/toaster'

export interface IValidationError {
  message: string
  e: Error | unknown
}

export const toastValidationError = (error: IValidationError) => {
  if (Array.isArray(error)) {
    error.forEach((err: { field: string; messages: string[] }) => {
      toaster.error({
        description: err.messages.join(', ') ?? err.toString(),
      })
    })
    return
  } else {
    toaster.error({
      description: error.message ?? error.toString(),
    })
  }
}
