import { createRoot } from 'react-dom/client'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { Suspense } from 'react'
import { Provider } from './components/ui/provider'
import { Toaster } from '@/components/ui/toaster'

import BistroCloudApp from './BistroCloudApp'
import './style.css'

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

const root = createRoot(document.getElementById('bistrocloud-root')!)
root.render(
  // <GoogleOAuthProvider clientId={clientId}>
  <Provider defaultTheme="light">
    <Suspense fallback={<div>Loading...</div>}>
      <BistroCloudApp />
    </Suspense>
    <Toaster />
  </Provider>,
  // {/* </GoogleOAuthProvider>, */}
)
