import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInRight } from '../utils/animations'

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          const inc = target / steps
          let cur = 0
          const timer = setInterval(() => {
            cur += inc
            if (cur >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(cur))
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// ── Floating badge ─────────────────────────────────────────────────────────────
function Badge({ icon, title, subtitle, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-2xl ${className}`}
      style={{ animation: `float ${3 + delay}s ease-in-out ${delay}s infinite` }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-base">
          {icon}
        </div>
        <div>
          <p className="text-white font-semibold text-xs leading-tight">{title}</p>
          <p className="text-white/60 text-[10px] leading-tight">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center pt-20">

      {/* Decorative background circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.p
              variants={fadeInUp}
              className="text-blue-400 text-sm font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Gastroenterólogo · Internista · Nutriólogo Jiménez
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Pierde peso sin{' '}
              <span className="text-gradient-blue">cirugía</span>{' '}
              y mejora tu calidad de vida
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeInUp}
              className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Tratamientos avanzados, seguros y mínimamente invasivos para transformar
              tu salud. Dr. Jiménez Espiritusanto, referente en Santo Domingo.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-12">
              <a href="#contacto" className="btn-primary shimmer-btn text-gray-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar evaluación
              </a>
              <a
                href="https://wa.me/18096228484"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: (809) 622-8484
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
            >
              {[
                { value: 15, suffix: '+', label: 'Años de experiencia' },
                { value: 0,  suffix: '',  label: 'Cirugías necesarias' },
                { value: 100, suffix: '%', label: 'Procedimientos seguros' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-white">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: doctor photo + floating badges ── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex justify-center items-end"
          >
            {/* Photo placeholder — replace with actual doctor image */}
            <div className="relative w-[420px] h-[520px]">
              <img
                src="/assets/doctor-hero.jpg"
                alt="Dr. Jiménez Espiritusanto"
                className="w-full h-full object-cover object-top rounded-3xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="w-full h-full rounded-3xl bg-gradient-to-b from-blue-800/40 to-blue-900/60 border border-white/10 items-center justify-center hidden"
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center text-4xl">👨‍⚕️</div>
                  <p className="text-white/60 text-sm">Dr. Jiménez</p>
                  <p className="text-white/40 text-xs mt-1">Agregar foto: /public/assets/doctor-hero.jpg</p>
                </div>
              </div>
            </div>

            {/* Floating badge — Certificado */}
            <Badge
              icon="🏅"
              title="Certificado"
              subtitle="Especialista certificado"
              className="top-8 -right-4"
              delay={0.8}
            />

            {/* Floating badge — Sin Cirugía */}
            <Badge
              icon="✅"
              title="Sin Cirugía"
              subtitle="Procedimientos endoscópicos"
              className="bottom-24 -right-8"
              delay={1.2}
            />

            {/* Floating badge — 15+ años */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-10 left-0 bg-amber-500 rounded-2xl px-4 py-3 shadow-2xl"
              style={{ animation: 'float-slow 4.5s ease-in-out 0.5s infinite' }}
            >
              <p className="text-white font-bold text-lg leading-none">15+</p>
              <p className="text-amber-100 text-[11px]">Años de experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 5 1440 0V60H0Z" fill="#F8FAFF" />
        </svg>
      </div>
    </section>
  )
}
