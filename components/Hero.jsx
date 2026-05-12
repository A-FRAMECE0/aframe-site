'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const chars = 'A-FR&ME'.split('')

  return (
    <section ref={ref} className="relative min-h-screen bg-dark flex flex-col items-center justify-center overflow-hidden">

      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,7,26,0.35)_0%,transparent_70%)]" />

      {/* Corner marks */}
      {[
        'top-8 left-8',
        'top-8 right-8',
        'bottom-8 left-8',
        'bottom-8 right-8',
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8`}>
          <div className={`absolute top-0 left-0 w-full h-px bg-gold/40 ${i === 1 || i === 3 ? 'right-0 left-auto' : ''}`} />
          <div className={`absolute top-0 left-0 h-full w-px bg-gold/40 ${i === 1 || i === 3 ? 'right-0 left-auto' : ''}`} />
        </div>
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-montserrat text-gold text-[10px] tracking-[0.4em] uppercase mb-10"
        >
          The Architecture of Ideas
        </motion.div>

        {/* Main title — letter by letter */}
        <div className="font-cinzel text-cream flex justify-center"
          style={{ fontSize: 'clamp(64px, 12vw, 160px)', letterSpacing: '0.12em', lineHeight: 1 }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={char === '&' ? 'text-gold' : ''}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="w-24 h-px bg-gold mx-auto my-10"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="font-cormorant italic text-cream/75 text-center mx-auto"
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', maxWidth: 520, lineHeight: 1.7 }}
        >
          Code. Design. Écriture.<br />
          Une seule architecture. Une seule signature.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#services"
            className="group font-cinzel text-[10px] tracking-[0.25em] uppercase bg-bordeaux text-cream px-10 py-4 hover:bg-gold hover:text-dark transition-all duration-400 relative overflow-hidden"
          >
            <span className="relative z-10">Découvrir l'Atelier</span>
          </a>
          <a
            href="#contact"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase border border-cream/30 text-cream/80 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-400"
          >
            Initier un Projet
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
        />
        <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-cream/30">Défiler</span>
      </motion.div>
    </section>
  )
}
