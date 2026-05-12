'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'The Lab',
    sub: 'Code & Développement',
    desc: 'Architecture logicielle, développement web et mobile, systèmes sur mesure. Chaque ligne de code est une décision d\'ingénieur.',
    items: ['Applications web & mobile', 'Sites vitrines premium', 'APIs & systèmes back-end', 'Dashboards & outils internes', 'Templates de code'],
    accent: '#6D071A',
  },
  {
    num: '02',
    title: 'The Studio',
    sub: 'Design & Branding',
    desc: 'Identités visuelles, interfaces utilisateur, systèmes de marque. L\'élégance au service de l\'efficacité.',
    items: ['Identité visuelle complète', 'UI/UX Design', 'Brand Book & charte', 'Supports print & digital', 'Direction artistique'],
    accent: '#C9A84C',
  },
  {
    num: '03',
    title: 'The Library',
    sub: 'Écriture & Contenu',
    desc: 'Rédaction stratégique, livres, copywriting. Les mots comme architecture de persuasion.',
    items: ['Copywriting & landing pages', 'Livres & e-books', 'Contenu SEO & blogs', 'Scripts & storytelling', 'Ghostwriting'],
    accent: '#1E0A0D',
  },
]

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-border/60 bg-lite overflow-hidden group transition-all duration-500"
      style={{ borderTopColor: hovered ? service.accent : undefined }}
    >
      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 right-0 h-0.5 origin-left"
        style={{ background: service.accent }}
      />

      <div className="p-10 lg:p-12">
        {/* Number */}
        <div className="font-cinzel text-6xl font-bold mb-8 transition-colors duration-300"
          style={{ color: hovered ? service.accent : 'rgba(109,7,26,0.08)' }}
        >
          {service.num}
        </div>

        {/* Title */}
        <h3 className="font-cinzel text-2xl text-dark mb-1 tracking-wider">
          {service.title}
        </h3>
        <p className="font-montserrat text-[9px] tracking-[0.25em] uppercase mb-6"
          style={{ color: service.accent }}
        >
          {service.sub}
        </p>

        {/* Divider */}
        <div className="w-8 h-px bg-border mb-6 transition-all duration-400 group-hover:w-16"
          style={{ background: hovered ? service.accent : undefined }}
        />

        {/* Description */}
        <p className="font-cormorant italic text-mid text-lg leading-relaxed mb-8">
          {service.desc}
        </p>

        {/* Items */}
        <ul className="space-y-2.5">
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="font-montserrat text-[12px] text-dark/70 flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="bg-cream py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-montserrat text-gold text-[9px] tracking-[0.4em] uppercase mb-4 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-gold/60" />
            L'Atelier
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-dark"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Trois Piliers.
            <span className="text-bordeaux"> Une Vision.</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} inView={inView} />
          ))}
        </div>

        {/* Package strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-dark p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="font-cinzel text-gold text-[9px] tracking-[0.3em] uppercase mb-2">La Force Unique</p>
              <p className="font-cormorant italic text-cream text-xl lg:text-2xl leading-snug">
                Le Package Hybride — Développement + Design + Contenu
                <span className="text-gold"> dans une seule offre.</span>
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 font-cinzel text-[10px] tracking-[0.2em] uppercase border border-gold text-gold px-8 py-3.5 hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Demander un Devis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
