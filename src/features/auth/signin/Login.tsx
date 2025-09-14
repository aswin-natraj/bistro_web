import { useState } from 'react'

function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'reset'>('login')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Bistro Cloud</h1>
          <p className="text-slate-400 text-lg">Restaurant Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Welcome Text */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Welcome back</h2>
            <p className="text-slate-400">Sign in to your account or create a new one</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-slate-700/50 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-slate-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('reset')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'reset'
                  ? 'bg-slate-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Reset
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="bistrimenadmin@yopmail.com"
                  className="w-full px-4 py-3 bg-yellow-100 border border-yellow-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="password123"
                  className="w-full px-4 py-3 bg-yellow-100 border border-yellow-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Login
              </button>

              {/* Resend Verification Link */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  Resend verification email
                </button>
              </div>
            </form>
          )}

          {/* Reset Password Form */}
          {activeTab === 'reset' && (
            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Send Reset Link Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Reset Link
              </button>

              {/* Info Message */}
              <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>We'll email you a link to reset your password</span>
              </div>
            </form>
          )}
        </div>

        {/* Support Link */}
        <div className="text-center mt-6">
          <p className="text-slate-400">
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