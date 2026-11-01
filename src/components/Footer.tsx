import { Link } from 'react-router-dom'
import site from '../content/site.json'

export default function Footer() {
  return (
    <footer style={{ background: 'hsl(var(--iron))' }} className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="h-display text-2xl text-smoke tracking-tight">COLUMBUS AUTO</p>
            <p className="mt-6 text-sm text-smoke/50 leading-relaxed max-w-xs">
              General auto repair on Dublin Granville Rd in Columbus.
              172 Google reviews. 24-month warranty on every job.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-4">Pages</p>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/estimate', label: 'Request Estimate' },
                { to: '/legal', label: 'Privacy & Terms' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-smoke/50 hover:text-brass transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass mb-4">Contact</p>
            <address className="not-italic text-sm text-smoke/50 space-y-2">
              <p>{site.business.address.full}</p>
              <p>
                <a href={site.business.phoneHref} className="hover:text-brass transition-colors">
                  {site.business.phone}
                </a>
              </p>
              <p>{site.business.hours.weekday}</p>
              <p>{site.business.hours.saturday}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-smoke/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-smoke/30">
            &copy; {new Date().getFullYear()} {site.business.name}. All rights reserved.
          </p>
          <p className="text-xs text-smoke/20">
            Website by <a href="https://thewateringhole.team" className="hover:text-smoke/40 transition-colors" target="_blank" rel="noopener noreferrer">The Watering Hole</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
