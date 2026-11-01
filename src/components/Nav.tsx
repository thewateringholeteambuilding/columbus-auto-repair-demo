import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import site from '../content/site.json'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') {
      setScrolled(false)
      return
    }

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const transparent = pathname === '/' && !scrolled

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 border-b ${
        transparent
          ? 'border-transparent'
          : 'bg-iron/95 backdrop-blur-md border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="h-display text-xl text-smoke tracking-tight">COLUMBUS AUTO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-brass transition-colors duration-200'
                  : 'text-smoke/70 hover:text-white transition-colors duration-200'
              }
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href={site.business.phoneHref}
            className="text-sm font-medium text-smoke/70 hover:text-white transition-colors duration-200"
          >
            {site.business.phone}
          </a>

          <Link
            to="/estimate"
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wide bg-brass text-iron hover:brightness-110 transition-all duration-200"
          >
            Request estimate
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden p-2 text-smoke/80 hover:text-white transition-colors duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7H20" />
                <path d="M4 17H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10" style={{ background: 'hsl(var(--iron))' }}>
          <nav className="px-5 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors ${isActive ? 'text-brass' : 'text-smoke/75'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={site.business.phoneHref} className="text-base text-smoke/75">
              Call {site.business.phone}
            </a>
            <Link
              to="/estimate"
              onClick={() => setOpen(false)}
              className="inline-block bg-brass text-iron px-4 py-3 text-sm font-semibold uppercase tracking-wide text-center hover:brightness-110 transition-all"
            >
              Request estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
