import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, cardVariant, viewportOnce } from '../utils/animations'

const problems = [
  {
    icon: '⚖️',
    title: 'Dificultad para bajar de peso',
    desc: 'Dietas y ejercicios que no funcionan. El peso vuelve una y otra vez afectando tu autoestima y salud.',
  },
  {
    icon: '😰',
    title: 'Miedo a la cirugía',
    desc: 'El temor a los riesgos, la recuperación larga y las cicatrices te impide actuar. Existen alternativas sin bisturí.',
  },
  {
    icon: '💊',
    title: 'Tratamientos sin resultados',
    desc: 'Pastillas, medicamentos y dietas extremas que no funcionan a largo plazo sin supervisión médica especializada.',
  },
  {
    icon: '🫁',
    title: 'Problemas digestivos',
    desc: 'Acidez, inflamación, malestar crónico que afecta tu calidad de vida y bienestar diario.',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section id="razones" className="bg-[#F8FAFF] py-24 lg:py-32">
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
            ¿Te identificas?
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            ¿Por qué sigues sin resultados?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-base lg:text-lg max-w-xl mx-auto">
            Sabemos lo frustrante que es. Tienes los tratamientos correctos a tu
            alcance, sin cirugía ni riesgos innecesarios.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className="card-glass group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl flex-shrink-0
                                group-hover:bg-blue-100 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
