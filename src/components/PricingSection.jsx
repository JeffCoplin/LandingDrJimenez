import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, cardVariant, viewportOnce } from '../utils/animations'

const plans = [
  {
    name: 'Orbera',
    duration: '6 meses',
    desc: 'El balón más utilizado en el mundo. Aprobado por FDA, lleno de solución salina, colocado por endoscopio en 20 minutos.',
    loss: '20-30 kg',
    featured: false,
  },
  {
    name: 'Spatz3',
    duration: '12 meses',
    desc: 'Único balón ajustable. Permanece 12 meses y puede modificarse en volumen durante el tratamiento según la respuesta del paciente.',
    loss: '20-35 kg',
    featured: false,
  },
  {
    name: 'Allurion',
    duration: '4 meses · Sin endoscopía',
    desc: 'Revolucionario: una cápsula que el paciente traga. No requiere endoscopio, ni anestesia, ni quirófano. Se infla internamente y se excreta de forma natural.',
    loss: '10-15 kg',
    featured: true,
  },
  {
    name: 'Helioscopy',
    duration: 'Balón de aire',
    desc: 'Único balón llenado con gas. Más ligero, menor sensación de peso. Ideal para pacientes sensibles al líquido salino. Colocado endoscópicamente.',
    loss: '15-20 kg',
    featured: false,
  },
]

function PlanCard({ plan, isInView, index }) {
  if (plan.featured) {
    return (
      <motion.div
        variants={cardVariant}
        className="relative rounded-2xl p-7 glow-border bg-amber-500 text-white
                   scale-105 z-10 shadow-2xl shadow-amber-500/30"
      >
        {/* Featured badge */}
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-amber-600
                         text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
          ⭐ MÁS POPULAR
        </span>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-amber-100 font-semibold text-xs uppercase tracking-wider">
            {plan.duration}
          </span>
        </div>
        <h3 className="text-2xl font-extrabold mb-3">{plan.name}</h3>
        <p className="text-amber-100 text-sm leading-relaxed mb-5">{plan.desc}</p>

        <div className="bg-white/15 rounded-xl p-3 flex items-center justify-between">
          <span className="text-amber-100 text-sm">Pérdida promedio</span>
          <span className="font-bold text-white text-lg">{plan.loss}</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariant}
      className="rounded-2xl p-7 bg-navy-800 border border-white/10
                 hover:-translate-y-1 hover:border-white/20 hover:bg-navy-700
                 transition-all duration-300 group cursor-default"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider">
          {plan.duration}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
      <p className="text-white/55 text-sm leading-relaxed mb-5">{plan.desc}</p>

      <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between
                      group-hover:bg-white/8 transition-colors">
        <span className="text-white/50 text-sm">Pérdida promedio</span>
        <span className="font-bold text-white">{plan.loss}</span>
      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section className="bg-navy-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Tipos de Balón Gástrico
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title-white mb-4">
            ¿Cuál balón es para ti?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-base lg:text-lg max-w-xl mx-auto">
            El Dr. Jiménez te ayuda a elegir el tratamiento ideal según tu perfil y objetivos.
          </motion.p>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} isInView={isInView} index={i} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 bg-white/5 border border-white/10 rounded-2xl px-6 py-5
                     flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm">
            ¿No sabes cuál balón es el indicado para ti?{' '}
            <span className="text-white">El Dr. Jiménez evaluará tu caso personalizado.</span>
          </p>
          <a
            href="#contacto"
            className="flex-shrink-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white
                       text-sm font-semibold rounded-xl transition-all hover:scale-105
                       hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Solicitar evaluación
          </a>
        </motion.div>
      </div>
    </section>
  )
}
