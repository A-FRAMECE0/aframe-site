export default function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/5 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-cinzel text-cream/80 text-lg tracking-[0.3em]">
          A-FR<span className="text-gold">&amp;</span>ME
        </div>

        <div className="font-montserrat text-cream/25 text-[10px] tracking-[0.2em] uppercase text-center">
          The Architecture of Ideas — Lomé, Togo
        </div>

        <div className="font-montserrat text-cream/25 text-[10px] tracking-[0.15em]">
          &copy; {new Date().getFullYear()} A-FR&amp;ME. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
