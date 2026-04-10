import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ServicesSection from './components/ServicesSection'
import PricingSection from './components/PricingSection'
import BenefitsSection from './components/BenefitsSection'
import AboutDoctorSection from './components/AboutDoctorSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, width: '100%' }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <PricingSection />
        <BenefitsSection />
        <AboutDoctorSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
