import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import site from '../content/site.json'

export default function Legal() {
  return (
    <>
      <Seo
        title="Privacy & Terms | Columbus Auto Repair"
        description="Privacy policy and terms of service for the Columbus Auto Repair website."
        path="/legal"
        noindex
      />

      <div className="pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-brass hover:underline mb-8"
          >
            &larr; Back to Home
          </Link>

          <h1 className="h-display text-3xl md:text-4xl text-iron mb-8">PRIVACY & TERMS</h1>

          <div className="space-y-8 text-sm text-iron/75 leading-relaxed">
            <section>
              <h2 className="h-display text-lg text-iron mb-3">PRIVACY POLICY</h2>
              <p>
                {site.business.name} ("we", "us") operates this website. We collect only
                the information you voluntarily provide through our estimate request form:
                name, email, phone number, vehicle details, and service descriptions.
              </p>
              <p className="mt-3">
                This information is used solely to respond to your inquiry and schedule
                service. We do not sell, rent, or share your personal information
                with third parties except as required to process your repair.
              </p>
              <p className="mt-3">
                This site uses Google Analytics 4 with Consent Mode v2. Analytics cookies
                are only set after you accept them via the cookie banner. You may decline
                analytics cookies and still use the site fully.
              </p>
            </section>

            <section>
              <h2 className="h-display text-lg text-iron mb-3">TERMS OF SERVICE</h2>
              <p>
                This website is provided for informational purposes. Estimate requests submitted
                through the online form are not confirmed appointments until we contact you
                to verify availability.
              </p>
              <p className="mt-3">
                All repair work performed by {site.business.name} is subject to our
                written service agreement provided at the time of repair authorization.
                The 24-month, 24,000-mile warranty is detailed in that agreement.
              </p>
            </section>

            <section>
              <h2 className="h-display text-lg text-iron mb-3">CONTACT</h2>
              <p>
                Questions about this policy:{' '}
                <a href={site.business.phoneHref} className="text-brass hover:underline">
                  {site.business.phone}
                </a>{' '}
                or visit us at {site.business.address.full}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
