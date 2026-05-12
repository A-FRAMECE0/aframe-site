'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lines = [
  'Nous vivons dans un monde de bruit.',
  'Pour exister, une idée a besoin d\'un cadre.',
  '',
  'Chez A-FR&ME, nous ne choisissons pas',
  'entre la rigueur du code et l\'élégance des mots.',
  'Nous fusionnons les deux pour bâtir',
  'des structures qui durent.',
  '',
  'Que ce soit une ligne de code ou une ligne de texte,',
  'chaque détail est signé de notre sceau d\'excellence.',
]

export default function Manifesto() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="manifesto" className="bg-bordeaux relative overflow-hidden py-32 px-6 lg:px-20">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Gold vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden lg:block" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-gold text-[9px] tracking-[0.4em] uppercase mb-16 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-gold/60" />
          Manifesto
        </motion.div>

        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.12 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-8 -left-4 font-cormorant text-cream leading-none select-none"
          style={{ fontSize: 'clamp(120px, 20vw, 220px)' }}
        >
          "
        </motion.div>

        {/* Lines */}
        <div className="relative">
          {lines.map((line, i) => {
            if (!line) return <div key={i} className="h-6" />
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-cormorant text-cream leading-relaxed mb-1"
                style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontStyle: 'italic' }}
              >
                {line}
              </motion.p>
            )
          })}
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-16 flex items-center gap-5"
        >
          <div className="w-12 h-px bg-gold/60" />
          <span className="font-montserrat text-gold/80 text-[11px] tracking-[0.2em] uppercase">
            TCHANI Wadou Djawada — Fondatrice & CEO
          </span>
        </motion.div>
      </div>
    </section>
  )
}
