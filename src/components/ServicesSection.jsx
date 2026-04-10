import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, cardVariant, viewportOnce } from '../utils/animations'

const services = [
  {
    icon: '🫧',
    color: 'bg-blue-50 border-blue-100 text-blue-600',
    title: 'Balón Gástrico',
    desc: 'El método más efectivo para perder peso sin cirugía. Un balón se introduce en el estómago de forma endoscópica, reduciendo el apetito y ayudando a crear hábitos saludables.',
    tags: ['Sin cirugía', 'Sin incisiones', '✓ 12 meses'],
    tagStyles: ['bg-blue-100 text-blue-700', 'bg-blue-100 text-blue-700', 'bg-green-100 text-green-700'],
  },
  {
    icon: '🔬',
    color: 'bg-purple-50 border-purple-100 text-purple-600',
    title: 'Gastroplastia Endoscópica',
    desc: 'Reducción del estómago mediante sutura endoscópica sin cirugía abierta. Ideal para pacientes que buscan resultados permanentes con recuperación rápida de 1-3 días.',
    tags: ['Resultado permanente', '20-25% pérdida'],
    tagStyles: ['bg-purple-100 text-purple-700', 'bg-amber-100 text-amber-700'],
  },
  {
    icon: '🩺',
    color: 'bg-teal-50 border-teal-100 text-teal-600',
    title: 'Endoscopía Bariátrica',
    desc: 'Procedimiento diagnóstico y terapéutico del sistema digestivo superior. Permite identificar y tratar condiciones relacionadas con la obesidad sin cirugía convencional.',
    tags: ['Diagnóstico previo', 'Mínimamente invasivo'],
    tagStyles: ['bg-teal-100 text-teal-700', 'bg-teal-100 text-teal-700'],
  },
  {
    icon: '💊',
    color: 'bg-orange-50 border-orange-100 text-orange-600',
    title: 'Cápsula Endoscópica',
    desc: 'El paciente traga una pequeña cápsula que recorre el intestino delgado. Sin sedación ni procedimiento invasivo. Diagnóstico completo en 8 horas.',
    tags: ['Sin sedación', 'Diagnóstico completo'],
    tagStyles: ['bg-orange-100 text-orange-700', 'bg-orange-100 text-orange-700'],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section id="tratamientos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="section-label mb-3">
            Tratamientos especializados
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Procedimientos modernos para tu bienestar
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-base lg:text-lg">
            Sin cirugías abiertas. Sin cicatrices. Con resultados comprobados.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-100/80
                         transition-all duration-300 group cursor-default"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl mb-5 ${s.color}
                               group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${s.tagStyles[i]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
