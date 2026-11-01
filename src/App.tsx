import { Routes, Route, useLocation } from 'react-router-dom'
import SkipLink from './components/SkipLink'
import Nav from './components/Nav'
import Footer from './components/Footer'
import StickyCallBar from './components/StickyCallBar'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Estimate from './pages/Estimate'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

const NAV_HIDDEN = ['/legal']

export default function App() {
  const { pathname } = useLocation()
  const showNav = !NAV_HIDDEN.includes(pathname)

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      {showNav && <Nav />}
      {showNav && pathname !== '/' && <div className="h-[72px] shrink-0" aria-hidden="true" />}
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showNav && <Footer />}
      {showNav && <StickyCallBar />}
      <CookieBanner />
    </>
  )
}
