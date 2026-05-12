'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/mojrregw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSent(true)
    } catch (err) {
      alert('Erreur envoi. Réessaie.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `w-full bg-transparent border-b border-cream/15 py-4 font-montserrat text-cream text-sm placeholder-cream/25 focus:outline-none focus:border-gold transition-colors duration-300`

  return (
    <section id="contact" className="bg-bordeaux py-32 px-6 lg:px-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-montserrat text-gold text-[9px] tracking-[0.4em] uppercase mb-6"
          >
            Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-cream mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            Construisons Quelque Chose
            <br />
            <span className="text-gold">d'Exceptionnel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-cormorant italic text-cream/60 text-xl"
          >
            Chaque grand projet commence par une conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold mb-3">Email</p>
              <p className="font-cormorant text-cream text-lg italic">aframe.studio.contact@gmail.com</p>
            </div>
            <div>
              <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold mb-3">Localisation</p>
              <p className="font-cormorant text-cream text-lg italic">Lomé, Togo<br />Disponible à l'international</p>
            </div>
            <div>
              <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold mb-3">Réseaux</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/a-frame-wadou-79376340a/?skipRedirect=true' },
                  { label: 'Instagram', url: 'https://www.instagram.com/aframe.ceo' },
                  //{ label: 'WhatsApp', url: 'https://wa.me/22890000000' },//
                ].map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-cream/50 text-sm hover:text-gold transition-colors tracking-wide"
                  >
                    {r.label} →
                  </a>
                ))}
              </div>
            </div>

            {/* Seal */}
            <div className="w-20 h-20 border border-gold/30 rounded-full flex flex-col items-center justify-center">
              <span className="font-cinzel text-gold text-xs tracking-widest">A-FR&ME</span>
              <span className="font-cinzel text-gold/40 text-[8px] tracking-widest mt-0.5">STUDIO</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="font-cinzel text-gold text-2xl mb-4">Message Reçu</div>
                <p className="font-cormorant italic text-cream/70 text-lg">
                  Je vous répondrai dans les 24 heures.<br />
                  Chaque détail sera traité avec excellence.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handle('name')}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={form.email}
                      onChange={handle('email')}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={form.project}
                    onChange={handle('project')}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Type de projet</option>
                    <option value="lab">The Lab — Développement</option>
                    <option value="studio">The Studio — Design & Branding</option>
                    <option value="library">The Library — Écriture</option>
                    <option value="hybrid">Package Hybride</option>
                    <option value="other">Autre / Conseil</option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Décrivez votre projet..."
                    value={form.message}
                    onChange={handle('message')}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-cinzel text-[10px] tracking-[0.3em] uppercase bg-cream text-bordeaux py-5 hover:bg-gold transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}