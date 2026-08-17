import { useEffect } from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MarketSection from './components/MarketSection.jsx'
import SolutionSection from './components/SolutionSection.jsx'
import ApplicationsSection from './components/ApplicationsSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import AppCtaSection from './components/AppCtaSection.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import DeleteAccountPage from './pages/DeleteAccountPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <MarketSection />
      <SolutionSection />
      <ApplicationsSection />
      <FaqSection />
      <AppCtaSection />
    </>
  )
}

function AppShell() {
  const { pathname } = useLocation()
  // The language-specific privacy policy pages (/privacy-policy/en,
  // /privacy-policy/ta) are embedded in the mobile app, so they render
  // without the site header, footer, and back-to-top button.
  const embedded = /^\/privacy-policy\/[^/]+$/.test(pathname)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!embedded && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy/:lang" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
      {!embedded && <Footer />}
      {!embedded && <BackToTop />}
    </Box>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}

export default App
