import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Columbus Auto Repair, Columbus OH"
        description="Oil changes, brakes, engine diagnostics, transmission, AC, suspension, electrical, and Ohio E-Check. 24-month warranty on all repairs. Columbus, OH."
        path="/services"
      />

      {/* Header */}
      <section className="py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            WHAT WE WORK ON
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Eight core services. Every one backed by a 24-month, 24,000-mile warranty.
            Domestic, import, truck, SUV.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="space-y-8">
            {site.services.map((s, i) => (
              <div
                key={i}
                id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="service-card bg-white border border-border p-8 grid gap-6 md:grid-cols-3 md:items-start"
              >
                <div className="md:col-span-2">
                  <h2 className="h-display text-xl text-iron mb-3">{s.title.toUpperCase()}</h2>
                  <p className="text-sm text-iron/75 leading-relaxed">{s.body}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-brass mb-1">Common signs</p>
                  <p className="text-sm text-iron/60">{s.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="h-display text-2xl md:text-3xl text-iron mb-8">FROM CALL TO PICKUP</h2>

          <div className="grid gap-8 md:grid-cols-4">
            {site.process.map((p, i) => (
              <div key={i}>
                <span
                  className="inline-flex items-center justify-center w-10 h-10 text-sm font-semibold mb-3"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {p.step}
                </span>
                <h3 className="h-display text-base text-iron mb-2">{p.title.toUpperCase()}</h3>
                <p className="text-sm text-iron/70 leading-relaxed">{p.body}</p>
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
              Know what you need? Request an estimate.
            </p>
          </div>
          <Link
            to="/estimate"
            className="bg-brass text-iron px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center shrink-0"
          >
            Request estimate
          </Link>
        </div>
      </section>
    </>
  )
}
