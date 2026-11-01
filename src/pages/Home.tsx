import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronDown, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import site from '../content/site.json'

const HERO_IMG = 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1600&q=80'

/* ---------- Certifications bar ---------- */
function CertsBar() {
  return (
    <section className="py-5 border-y border-border" style={{ background: 'hsl(var(--iron))' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] text-smoke/50">
          {site.certifications.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Reviews ---------- */
function ReviewsStrip() {
  return (
    <section className="section-py" id="reviews">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-brass mb-3">What customers say</p>
            <h2 className="h-display text-3xl md:text-4xl text-iron">
              {site.business.reviewCount} REVIEWS ON GOOGLE
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(Number(site.business.rating)) ? 'fill-brass text-brass' : 'text-border'}`}
              />
            ))}
            <span className="ml-2 text-sm text-muted">{site.business.rating}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <div
              key={i}
              className="service-card bg-white border border-border p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-brass text-brass" />
                ))}
              </div>
              <p className="text-sm text-iron/80 leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-medium text-iron">{t.author}</p>
                <p className="text-xs text-muted mt-0.5">{t.detail}</p>
                <p className="text-xs text-muted mt-0.5">{t.date} / {t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Services snapshot ---------- */
function ServicesSnapshot() {
  return (
    <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }} id="services-snapshot">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="h-display text-3xl md:text-4xl text-iron">WHAT WE WORK ON</h2>
          <Link
            to="/services"
            className="text-sm text-brass hover:underline transition-colors shrink-0"
          >
            All 8 services
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.slice(0, 4).map((s, i) => (
            <Link
              key={i}
              to="/services"
              className="service-card bg-white border border-border p-6 block"
            >
              <h3 className="h-display text-lg text-iron mb-2">{s.title.toUpperCase()}</h3>
              <p className="text-sm text-iron/70 leading-relaxed mb-3">{s.body}</p>
              <p className="text-xs text-brass">{s.ideal}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Process timeline ---------- */
function ProcessTimeline() {
  return (
    <section className="section-py section-divider" id="process">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="h-display text-3xl md:text-4xl text-iron mb-12">
          HOW IT WORKS
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {site.process.map((p, i) => (
            <div key={i} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 text-sm font-semibold"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--iron))' }}
                >
                  {p.step}
                </span>
                {i < site.process.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-border" />
                )}
              </div>
              <h3 className="h-display text-lg text-iron mb-2">{p.title.toUpperCase()}</h3>
              <p className="text-sm text-iron/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ Accordion ---------- */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, site.faqs.length)
  }, [])

  return (
    <section className="section-py section-divider" style={{ background: 'hsl(var(--card))' }} id="faq">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-32">
            <h2 className="h-display text-3xl md:text-4xl text-iron">
              COMMON QUESTIONS
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              If your question is not listed here, call{' '}
              <a href={site.business.phoneHref} className="text-brass hover:underline">
                {site.business.phone}
              </a>{' '}
              and we will answer it directly.
            </p>
          </div>

          <div className="space-y-0">
            {site.faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-iron pr-4 group-hover:text-brass transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    ref={(el) => { contentRefs.current[i] = el }}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[i]?.scrollHeight ?? 300}px`
                        : '0px',
                    }}
                  >
                    <div className="pb-5">
                      <p className="text-sm text-iron/70 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Map + CTA ---------- */
function MapCta() {
  return (
    <section className="section-py section-divider" id="visit">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="h-display text-3xl md:text-4xl text-iron mb-4">
              827 E DUBLIN GRANVILLE RD
            </h2>
            <address className="not-italic text-sm text-iron/70 space-y-1 mb-6">
              <p>{site.business.address.full}</p>
              <p>{site.business.hours.weekday}</p>
              <p>{site.business.hours.saturday}</p>
            </address>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/estimate"
                className="bg-brass text-iron px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
              >
                Request your estimate
              </Link>
              <a
                href={site.business.phoneHref}
                className="border border-border px-6 py-3.5 text-sm font-medium text-iron/70 hover:text-iron hover:border-iron/30 transition-colors text-center"
              >
                Call {site.business.phone}
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] w-full">
            <iframe
              title="Columbus Auto Repair location"
              src={`https://maps.google.com/maps?q=${site.business.mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Home page ---------- */
export default function Home() {
  return (
    <>
      <Seo
        title="Columbus Auto Repair | Auto Repair in Columbus, OH"
        description="Auto repair at 827 E Dublin Granville Rd, Columbus, OH. Oil changes, brakes, diagnostics, transmission, AC, suspension, electrical, and Ohio E-Check. 172 Google reviews."
        path="/"
      />

      {/* Hero: full-bleed photo with gradient overlay */}
      <section className="relative min-h-[90vh] flex items-end" id="hero">
        <img
          src={HERO_IMG}
          alt="Technician working under a vehicle lift at Columbus Auto Repair"
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
          style={{ animation: 'kenburns 12s ease-out forwards' }}
          width={1600}
          height={1067}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iron via-iron/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 w-full">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-brass" aria-hidden />
            <span className="text-sm text-smoke/70">
              827 E Dublin Granville Rd, Columbus
            </span>
          </div>

          <h1 className="h-display text-4xl sm:text-5xl md:text-7xl text-smoke max-w-3xl">
            YOUR SHOP ON{'\n'}DUBLIN GRANVILLE RD.
          </h1>

          <p className="mt-5 text-smoke/65 text-base md:text-lg max-w-xl leading-relaxed">
            Oil changes. Brakes. Diagnostics. Transmission. AC.
            172 Google reviews. Northland Columbus.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/estimate"
              className="bg-brass text-iron px-7 py-4 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all text-center"
            >
              Request your estimate
            </Link>
            <a
              href={site.business.phoneHref}
              className="border border-smoke/25 text-smoke/80 px-7 py-4 text-sm font-medium hover:border-smoke/50 hover:text-white transition-colors text-center"
            >
              Call {site.business.phone}
            </a>
          </div>
        </div>
      </section>

      <CertsBar />
      <ReviewsStrip />
      <ServicesSnapshot />
      <ProcessTimeline />
      <FaqAccordion />
      <MapCta />
    </>
  )
}
