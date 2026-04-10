import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn, viewportOnce } from '../utils/animations'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section id="contacto" className="gradient-cta relative overflow-hidden py-28 lg:py-36">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Spinning ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" style={{ animation: 'spin 20s linear infinite reverse' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Badge */}
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 mb-8">
            <span className="h-px w-8 bg-amber-400/60" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Cupos limitados — Evaluaciones personalizadas
            </span>
            <span className="h-px w-8 bg-amber-400/60" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Da el primer paso hacia una vida{' '}
            <span className="text-gradient-blue">más saludable</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p variants={fadeInUp} className="text-white/60 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            El Dr. Jiménez evaluará tu caso de forma personalizada y te recomendará el
            tratamiento ideal para alcanzar tus metas de salud. Sin compromisos, con resultados reales.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://wa.me/18096228484?text=Hola%20Dr.%20Jiménez%2C%20quisiera%20agendar%20una%20evaluación%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-2 px-7 py-4 text-gray-900
                         font-bold rounded-xl shadow-xl shadow-amber-500/25
                         transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar evaluación gratuita
            </a>

            <a
              href="https://wa.me/18096228484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30
                         hover:border-white/60 text-white font-bold rounded-xl backdrop-blur-sm
                         transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp directo
            </a>
          </motion.div>

          {/* Location */}
          <motion.p variants={fadeInUp} className="text-white/35 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Santo Domingo · (809) 622-8484
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
