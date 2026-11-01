import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import site from '../content/site.json'

export default function StickyCallBar() {
  return (
    <div className="sticky-call-bar" role="complementary" aria-label="Quick contact">
      <a
        href={site.business.phoneHref}
        className="flex items-center gap-2 text-sm font-medium text-smoke hover:text-brass transition-colors"
      >
        <Phone className="w-4 h-4" aria-hidden />
        {site.business.phone}
      </a>
      <Link
        to="/estimate"
        className="bg-brass text-iron px-5 py-2.5 text-xs font-semibold uppercase tracking-wide hover:brightness-110 transition-all"
      >
        Get estimate
      </Link>
    </div>
  )
}
