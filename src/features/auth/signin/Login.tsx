import { useState } from 'react'

function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'reset'>('login')

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-2">Bistro Cloud</h1>
          <p className="text-slate-400 text-base">Restaurant Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8">
          {/* Welcome Text */}
          <div className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-2">Welcome back</h2>
            <p className="text-slate-400 text-sm">Sign in to your account or create a new one</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-slate-700 rounded-md mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-slate-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('reset')}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'reset'
                  ? 'bg-slate-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Reset
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="bistrimenadmin@yopmail.com"
                  className="w-full px-4 py-3 bg-yellow-200 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="password123"
                  className="w-full px-4 py-3 bg-yellow-200 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mt-6"
              >
                Login
              </button>

              {/* Resend Verification Link */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Resend verification email
                </button>
              </div>
            </form>
          )}

          {/* Reset Password Form */}
          {activeTab === 'reset' && (
            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Send Reset Link Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mt-6"
              >
                Send Reset Link
              </button>

              {/* Info Message */}
              <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm mt-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>We'll email you a link to reset your password</span>
              </div>
            </form>
          )}
        </div>

        {/* Support Link */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            Need help? Contact{' '}
            <a
              href="mailto:support@bistrocloud.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              support@bistrocloud.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login