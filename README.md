# A-FR&ME — Site Officiel

> The Architecture of Ideas

## Démarrage Rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en mode développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement sur Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer (première fois)
vercel

# 3. Déploiements suivants
vercel --prod
```

Puis dans le dashboard Vercel : Settings → Domains → Ajouter `a-frame.studio`

## Personnalisation

| Fichier | Ce qu'il faut modifier |
|---|---|
| `components/About.jsx` | Ta photo, ta bio |
| `components/Work.jsx` | Tes vrais projets |
| `components/Contact.jsx` | Email, réseaux sociaux |
| `app/layout.js` | Meta SEO, description |
| `components/Hero.jsx` | Tagline si besoin |

## Formulaire de contact

Remplacer la fonction `submit` dans `Contact.jsx` par :
- **[Formspree](https://formspree.io)** — simple, gratuit jusqu'à 50 msgs/mois
- **[Resend](https://resend.com)** — pour un email pro

## Stack

- **Next.js 14** — Framework React (App Router)
- **Tailwind CSS** — Styles utilitaires
- **Framer Motion** — Animations
- **Google Fonts** — Cinzel, Cormorant Garamond, Montserrat

## Palette officielle

```
Bordeaux Royal  #6D071A
Crème / Ivoire  #F4F1EA
Or Impérial     #C9A84C
Noir Profond    #1E0A0D
Bordeaux Cendré #6B4E53
```

---

*A-FR&ME — Chaque détail est signé de notre sceau d'excellence.*
