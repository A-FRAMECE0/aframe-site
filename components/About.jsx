'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { num: '3', label: 'Disciplines maîtrisées' },
  { num: '∞', label: 'Idées à construire' },
  { num: '1', label: 'Signature. La vôtre.' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="bg-dark py-32 px-6 lg:px-20 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(ellipse at right, #C9A84C, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-montserrat text-gold text-[9px] tracking-[0.4em] uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-gold/60" />
              L'Architecte
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-cinzel text-cream mb-2"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              TCHANI
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="font-cinzel text-gold mb-10"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Wadou Djawada
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="font-cormorant italic text-cream/70 text-xl leading-relaxed mb-6"
            >
              Fondatrice & CEO d'A-FR&ME. Développeuse, designer et auteure — 
              trois disciplines au service d'une seule vision : construire des idées 
              qui durent.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="font-montserrat text-cream/50 text-sm leading-loose mb-10"
            >
              Basée à Lomé, Togo. Disponible pour des projets en Afrique et à l'international. 
              A-FR&ME n'est pas seulement un studio — c'est une promesse : que chaque projet 
              sera traité avec la rigueur d'un ingénieur, l'oeil d'un designer et la plume 
              d'un écrivain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {['Développement Web', 'Branding', 'Rédaction', 'Consulting', 'Formation'].map((tag) => (
                <span
                  key={tag}
                  className="font-montserrat text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-cream/10 text-cream/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual + Stats */}
          <div>
            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-10"
            >
              <div className="aspect-[3/4] bg-bordeaux/20 border border-cream/5 relative overflow-hidden max-w-sm mx-auto lg:mx-0">
                {/* Placeholder portrait design */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                    <span className="font-cinzel text-gold text-3xl">W</span>
                  </div>
                  <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-cream/20">
                    Remplacer par votre photo
                  </p>
                </div>
                {/* Corner ornaments */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/40" />
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-cream/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-dark p-6 text-center"
                >
                  <div className="font-cinzel text-gold text-3xl mb-1">{stat.num}</div>
                  <div className="font-montserrat text-[9px] tracking-[0.15em] uppercase text-cream/40 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
