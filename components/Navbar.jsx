'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Studio', href: '#services' },
  { label: 'Travaux', href: '#work' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-sm border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-cinzel text-cream text-xl tracking-[0.3em] hover:text-gold transition-colors duration-300">
            A-FR<span className="text-gold">&amp;</span>ME
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-montserrat text-cream/70 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block font-cinzel text-[10px] tracking-[0.2em] uppercase border border-gold/60 text-gold px-5 py-2 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Initier un Projet
          </a>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-cream text-2xl tracking-[0.2em] hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              className="mt-6 font-cinzel text-[11px] tracking-[0.2em] uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-dark transition-all"
            >
              Initier un Projet
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
