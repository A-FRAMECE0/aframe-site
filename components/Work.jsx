'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const categories = ['Tous', 'Code', 'Design', 'Écriture']

const projects = [
  {
    id: 1,
    title: 'Plateforme E-Commerce',
    category: 'Code',
    type: 'Application Web',
    desc: 'Architecture complète d\'une boutique en ligne avec dashboard admin, paiement intégré et gestion des stocks en temps réel.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: '#6D071A',
  },
  {
    id: 2,
    title: 'Identité Maison Koura',
    category: 'Design',
    type: 'Branding Complet',
    desc: 'Création de l\'identité visuelle d\'une marque de cosmétiques naturels africains. Logo, charte, packaging et stratégie visuelle.',
    tags: ['Brand Identity', 'Packaging', 'Brand Book'],
    color: '#C9A84C',
  },
  {
    id: 3,
    title: 'L\'Entrepreneur Invisible',
    category: 'Écriture',
    type: 'Livre Business',
    desc: 'Guide stratégique pour les entrepreneurs africains qui veulent construire une présence digitale forte sans budget marketing massif.',
    tags: ['Business', 'Stratégie', 'Amazon KDP'],
    color: '#1E0A0D',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    category: 'Code',
    type: 'Application SaaS',
    desc: 'Interface de visualisation de données pour une PME togolaise — tableaux de bord interactifs et exports automatisés.',
    tags: ['React', 'D3.js', 'API REST'],
    color: '#6D071A',
  },
  {
    id: 5,
    title: 'Studio Volta',
    category: 'Design',
    type: 'Site & Identité',
    desc: 'Refonte complète de l\'identité et du site web d\'un studio créatif. Du brief à la mise en ligne en 3 semaines.',
    tags: ['UI Design', 'Web Design', 'Figma'],
    color: '#C9A84C',
  },
  {
    id: 6,
    title: 'Contenu de Marque',
    category: 'Écriture',
    type: 'Copywriting',
    desc: 'Stratégie éditoriale, rédaction des 40 premières pages de contenu et mise en place du calendrier pour une startup fintech.',
    tags: ['Copywriting', 'SEO', 'Stratégie'],
    color: '#1E0A0D',
  },
]

function ProjectCard({ project, inView, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border border-border/50 bg-white"
    >
      {/* Color band top */}
      <div className="h-1 w-full" style={{ background: project.color }} />

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `${project.color}06` }}
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-montserrat text-[9px] tracking-[0.25em] uppercase mb-1 block"
              style={{ color: project.color }}
            >
              {project.type}
            </span>
            <h3 className="font-cinzel text-dark text-xl tracking-wide">{project.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 mt-1"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>

        <p className="font-cormorant italic text-mid text-base leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-montserrat text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-border/60 text-mid"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="bg-lite py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-montserrat text-gold text-[9px] tracking-[0.4em] uppercase mb-4 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-gold/60" />
            Réalisations
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-cinzel text-dark"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Travaux <span className="text-bordeaux">Sélectionnés</span>
            </motion.h2>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-montserrat text-[9px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-bordeaux border-bordeaux text-cream'
                      : 'border-border text-mid hover:border-bordeaux hover:text-bordeaux'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              delay={0.2 + i * 0.08}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase inline-block border border-bordeaux text-bordeaux px-10 py-4 hover:bg-bordeaux hover:text-cream transition-all duration-300"
          >
            Initier un Projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}
