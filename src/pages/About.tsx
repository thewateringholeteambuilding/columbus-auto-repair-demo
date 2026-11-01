import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

const SHOP_IMG = 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80'

export default function About() {
  return (
    <>
      <Seo
        title="About Columbus Auto Repair | Columbus, OH Mechanic"
        description="Auto repair on Dublin Granville Rd since 2011. ASE certified, AAA approved, Ohio E-Check station. 172 Google reviews. 24-month warranty on every repair."
        path="/about"
      />

      {/* Hero banner */}
      <section className="relative py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            THE SHOP ON DUBLIN GRANVILLE
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            General auto repair in Northland Columbus since 2011. ASE certified,
            AAA approved. 24-month warranty on every job.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="h-display text-2xl md:text-3xl text-iron mb-4">
              STRAIGHT ANSWERS, HONEST QUOTES
            </h2>
            <div className="space-y-4 text-sm text-iron/75 leading-relaxed">
              <p>
                Every vehicle gets a written estimate before work begins. We photograph
                the worn part, explain what it does in plain language, and wait for your
                go-ahead. No wrench turns without a yes. No surprise line items on the invoice.
              </p>
              <p>
                We service everything that rolls in. Honda, Toyota, Chevy, Ford, Subaru,
                Hyundai, Kia, BMW, Volkswagen. Domestic, import, truck, SUV. If it has
                an engine, we work on it.
              </p>
              <p>
                172 Google reviews. Not all of them are five stars. We read every one,
                and the critical ones made us better. That is how a shop earns repeat
                customers for 15 years on the same block.
              </p>
            </div>
          </div>

          <div className="aspect-[4/5]">
            <img
              src={SHOP_IMG}
              alt="Interior of Columbus Auto Repair shop with vehicle on lift"
              className="w-full h-full object-cover"
              width={900}
              height={1125}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">WHO DOES THE WORK</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {site.team.map((member, i) => (
              <div key={i} className="bg-white border border-border p-6">
                <div
                  className="w-12 h-12 flex items-center justify-center text-sm font-semibold mb-4"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {member.name.split(' ').map(w => w[0]).join('')}
                </div>
                <h3 className="h-display text-base text-iron">{member.name.toUpperCase()}</h3>
                <p className="text-xs text-brass mt-1">{member.role}</p>
                <p className="text-sm text-iron/70 mt-3 leading-relaxed">{member.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-py section-divider">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">CREDENTIALS</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {site.certifications.map((cert) => (
              <div key={cert} className="bg-card border border-border p-5 text-center">
                <p className="text-sm font-medium text-iron">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-t" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {site.stats.map((s, i) => (
              <div key={i}>
                <p className="h-display text-3xl md:text-4xl text-brass">{s.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-smoke/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="h-display text-xl md:text-2xl text-smoke">
              Need your car looked at?
            </p>
            <p className="text-sm text-smoke/50 mt-1">
              Same-day appointments when bays are open. 24-month warranty on parts and labor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/estimate"
              className="bg-brass text-iron px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
            >
              Request estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="border border-smoke/20 text-smoke/70 px-7 py-3.5 text-sm font-medium text-center hover:border-smoke/40 transition-colors"
            >
              {site.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
