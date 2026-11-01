import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'twh-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept(level: 'all' | 'necessary') {
    localStorage.setItem(STORAGE_KEY, level)
    setVisible(false)
    if (level === 'all' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
      style={{ background: 'hsl(var(--iron) / 0.97)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-smoke/70 flex-1">
          We use cookies for analytics.{' '}
          <Link to="/legal" className="text-brass hover:underline">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => accept('necessary')}
            className="px-4 py-2 text-xs font-medium border border-smoke/20 text-smoke/60 hover:border-smoke/40 transition-colors"
          >
            Necessary only
          </button>
          <button
            onClick={() => accept('all')}
            className="px-4 py-2 text-xs font-semibold bg-brass text-iron hover:brightness-110 transition-all"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
