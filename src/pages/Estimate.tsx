import { useState } from 'react'
import Seo from '../components/Seo'
import site from '../content/site.json'

interface FormData {
  name: string
  phone: string
  email: string
  vehicle: string
  issue: string
  preferred_day: string
  company_website: string
}

const SERVICE_HINTS: Record<string, string> = {
  oil: 'We carry conventional, synthetic blend, and full synthetic. Usually about 30 minutes.',
  brakes: 'Helpful: describe the sound or feeling (squealing, grinding, spongy pedal).',
  diagnostics: 'Helpful: note any warning lights on the dash and when the problem started.',
  transmission: 'Helpful: describe when the issue occurs (cold start, highway speed, reversing).',
  ac: 'Helpful: is it no cold air, weak airflow, or unusual smell?',
  suspension: 'Helpful: does the car pull to one side? Any clunking over bumps?',
  electrical: 'Helpful: describe the symptom (dead battery, flickering lights, no crank).',
  inspection: 'We handle Ohio E-Check emissions testing and safety inspections.',
}

export default function Estimate() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    issue: '',
    preferred_day: '',
    company_website: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [selectedService, setSelectedService] = useState('')

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.company_website) return

    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <>
      <Seo
        title="Request Estimate | Columbus Auto Repair, Columbus OH"
        description="Request an auto repair estimate at Columbus Auto Repair. Oil changes, brakes, diagnostics, engine work. Same-day appointments available. Columbus, OH."
        path="/estimate"
      />

      {/* Header */}
      <section className="py-20 md:py-28" style={{ background: 'hsl(var(--iron))' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="h-display text-4xl md:text-5xl text-smoke max-w-2xl">
            REQUEST AN ESTIMATE
          </h1>
          <p className="mt-4 text-smoke/55 max-w-lg leading-relaxed">
            Fill out the form below or call{' '}
            <a href={site.business.phoneHref} className="text-brass hover:underline">
              {site.business.phone}
            </a>{' '}
            to book directly. Same-day appointments available when bays are open.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-py">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          {status === 'sent' ? (
            <div role="status" aria-live="polite" className="text-center py-16">
              <p className="h-display text-2xl text-iron mb-3">REQUEST RECEIVED</p>
              <p className="text-sm text-iron/70 mb-6">
                We will review your request and call or text to confirm your appointment
                within one business day.
              </p>
              <a
                href={site.business.phoneHref}
                className="text-sm text-brass hover:underline"
              >
                Need it sooner? Call {site.business.phone}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_website">Company Website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={(e) => update('company_website', e.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Vehicle (year, make, model)
                </label>
                <input
                  id="vehicle"
                  type="text"
                  required
                  value={form.vehicle}
                  onChange={(e) => update('vehicle', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  placeholder="2020 Honda Civic"
                />
              </div>

              <div>
                <label htmlFor="service-type" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Type of service
                </label>
                <select
                  id="service-type"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                >
                  <option value="">Select one</option>
                  <option value="oil">Oil Change and Fluid Service</option>
                  <option value="brakes">Brake Repair</option>
                  <option value="diagnostics">Engine Diagnostics</option>
                  <option value="transmission">Transmission Service</option>
                  <option value="ac">AC and Heating</option>
                  <option value="suspension">Suspension and Alignment</option>
                  <option value="electrical">Electrical and Battery</option>
                  <option value="inspection">Ohio E-Check and Inspection</option>
                </select>
                {selectedService && SERVICE_HINTS[selectedService] && (
                  <p className="mt-2 text-xs text-brass">{SERVICE_HINTS[selectedService]}</p>
                )}
              </div>

              <div>
                <label htmlFor="issue" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Describe the issue or service needed
                </label>
                <textarea
                  id="issue"
                  required
                  rows={4}
                  value={form.issue}
                  onChange={(e) => update('issue', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors resize-y"
                />
              </div>

              <div>
                <label htmlFor="preferred_day" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Preferred day (optional)
                </label>
                <input
                  id="preferred_day"
                  type="text"
                  value={form.preferred_day}
                  onChange={(e) => update('preferred_day', e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-iron focus:outline-none focus:border-brass transition-colors"
                  placeholder="Monday morning, any weekday, Saturday, etc."
                />
              </div>

              <div role="status" aria-live="polite">
                {status === 'error' && (
                  <p className="text-sm text-red-600 mb-4">
                    Something went wrong. Please call us directly at {site.business.phone}.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brass text-iron py-4 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send estimate request'}
              </button>

              <p className="text-xs text-muted text-center">
                Or call{' '}
                <a href={site.business.phoneHref} className="text-brass hover:underline">
                  {site.business.phone}
                </a>{' '}
                to book directly.
              </p>
            </form>
          )}

          {/* Hours reminder */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm font-medium text-iron mb-3">Shop hours</p>
            <div className="text-sm text-iron/70 space-y-1">
              <p>{site.business.hours.weekday}</p>
              <p>{site.business.hours.saturday}</p>
              <p>{site.business.hours.sunday}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
