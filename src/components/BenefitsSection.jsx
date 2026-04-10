import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, cardVariant, viewportOnce } from '../utils/animations'

const benefits = [
  {
    icon: '🚫',
    title: 'Sin cirugía abierta',
    desc: 'Todos los procedimientos son endoscópicos. Sin cortes, sin cicatrices.',
  },
  {
    icon: '💼',
    title: 'Sin incapacidad laboral',
    desc: 'Regresa a tu vida normal en 24-48 horas. Sin hospitalización prolongada.',
  },
  {
    icon: '🏆',
    title: '15+ años de experiencia',
    desc: 'Especialista con amplia trayectoria en gastroenterología y nutrición clínica.',
  },
  {
    icon: '⚡',
    title: 'Recuperación rápida',
    desc: 'La mayoría de procedimientos duran 20-30 minutos con alta el mismo día.',
  },
  {
    icon: '🛡️',
    title: 'Procedimientos seguros',
    desc: 'Tecnología de vanguardia. Aprobados internacionalmente. Máxima seguridad.',
  },
  {
    icon: '✨',
    title: 'Mejora tu calidad de vida',
    desc: 'Resultados integrales: baja de peso, mejor digestión, mayor energía y autoestima.',
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section className="bg-[#F8FAFF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="section-label mb-3">
            ¿Por qué elegir al Dr. Jiménez?
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            Ventajas de nuestros tratamientos
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariant}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100
                         shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-50
                         transition-all duration-300 group cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center
                              text-xl flex-shrink-0 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                {b.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
