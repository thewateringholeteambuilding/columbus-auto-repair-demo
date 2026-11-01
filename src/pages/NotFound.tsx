import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Columbus Auto Repair"
        description="The page you are looking for does not exist."
        path="/404"
        noindex
      />

      <div className="min-h-[60vh] flex items-center justify-center px-5">
        <div className="text-center">
          <p className="h-display text-6xl text-brass mb-4">404</p>
          <h1 className="h-display text-2xl text-iron mb-3">PAGE NOT FOUND</h1>
          <p className="text-sm text-muted mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="bg-brass text-iron px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
