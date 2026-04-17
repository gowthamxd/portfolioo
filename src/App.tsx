import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, ExternalLink } from 'lucide-react'

import androidLogo from './assets/android-logo.jpg'
import ashirvadStore from './assets/ashirvad-store.jpg'
import bloomscapeBrochure from './assets/bloomscape-brochure.jpg'
import catPortrait from './assets/cat-portrait.jpg'
import coffeeMockup from './assets/coffee-mockup.jpg'
import cultFitLogo from './assets/cult-fit-logo.jpg'
import dogsCandid from './assets/dogs-candid.jpg'
import flowerWater from './assets/flower-water.jpg'
import jeepNature from './assets/jeep-nature.jpg'
import mcdonaldsAd from './assets/mcdonalds-ad.jpg'
import motoPoster from './assets/moto-poster.jpg'
import musicNight from './assets/music-night.jpg'
import nikeAd from './assets/nike-ad.jpg'
import nikeEndurance from './assets/nike-endurance.jpg'
import nikeGreen from './assets/nike-green.jpg'
import nikeOrange from './assets/nike-orange.jpg'
import redShadow from './assets/red-shadow.jpg'
import spidermanBookmark from './assets/spiderman-bookmark.jpg'
import universityPoster from './assets/university-poster.jpg'
import weddingCollage from './assets/wedding-collage.jpg'

interface PortfolioItem {
  id: number
  title: string
  category: string
  imageUrl: string
  description: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Abandoned Jeep – Nature Reclaiming',
    category: 'Photography',
    imageUrl: jeepNature,
    description:
      'A visually striking photograph of an abandoned jeep slowly being reclaimed by nature. The contrast between machine and greenery gives the frame a strong storytelling quality.',
  },
  {
    id: 2,
    title: 'Wedding Album Cover',
    category: 'Album Design',
    imageUrl: weddingCollage,
    description:
      'A romantic collage-style album cover designed to preserve emotional wedding moments. Layered imagery and close-up portraits create warmth and intimacy.',
  },
  {
    id: 3,
    title: 'Vintage Pottery Store',
    category: 'Photography',
    imageUrl: ashirvadStore,
    description:
      'A rustic storefront capture highlighting heritage, craft, and local character. The textures and signage create a nostalgic visual mood.',
  },
  {
    id: 4,
    title: 'Bloomscape Brochure',
    category: 'Editorial Design',
    imageUrl: bloomscapeBrochure,
    description:
      'A clean editorial layout focused on typography, spacing, and visual hierarchy. Designed to feel modern, fresh, and minimal.',
  },
  {
    id: 5,
    title: 'Floral Water Composition',
    category: 'Photography',
    imageUrl: flowerWater,
    description:
      'A serene composition using floating petals, color contrast, and symmetry. The image feels calm while remaining visually rich.',
  },
  {
    id: 6,
    title: 'Cat Portrait',
    category: 'Photography',
    imageUrl: catPortrait,
    description:
      'A candid portrait focused on mood, framing, and subject isolation. The darker background adds a cinematic touch.',
  },
  {
    id: 7,
    title: 'University Admission Poster',
    category: 'Poster Design',
    imageUrl: universityPoster,
    description:
      'A bold promotional poster created to attract attention quickly. The layout uses strong visual hierarchy and bright composition.',
  },
  {
    id: 8,
    title: 'Nike Endurance Campaign',
    category: 'Brand Campaign',
    imageUrl: nikeEndurance,
    description:
      'A sports campaign visual centered on endurance, energy, and performance. The composition gives it a strong advertising feel.',
  },
  {
    id: 9,
    title: 'Android Logo Recreation',
    category: 'Logo Design',
    imageUrl: androidLogo,
    description:
      'A simplified logo recreation based on geometry and clarity. The bright green tone keeps the icon instantly recognizable.',
  },
  {
    id: 10,
    title: 'Spider-Verse Bookmark',
    category: 'Creative Design',
    imageUrl: spidermanBookmark,
    description:
      'A playful comic-inspired bookmark using layered characters and strong contrast. It combines fandom with bold graphic storytelling.',
  },
  {
    id: 11,
    title: 'Nike Green AI Product Visual',
    category: 'AI Product Visual',
    imageUrl: nikeGreen,
    description:
      'A futuristic shoe concept using dramatic lighting and motion-led presentation. Built to feel premium and high energy.',
  },
  {
    id: 12,
    title: 'Cult Fit Logo',
    category: 'Logo Design',
    imageUrl: cultFitLogo,
    description:
      'A bold fitness logo built around clean geometry and strong symmetry. Minimal, sharp, and easy to remember.',
  },
  {
    id: 13,
    title: 'Nike Orange Product Focus',
    category: 'Product Design',
    imageUrl: nikeOrange,
    description:
      'A clean product-centered composition emphasizing form, texture, and bright contrast. Designed like a modern commercial visual.',
  },
  {
    id: 14,
    title: 'Music Night Poster',
    category: 'Event Poster',
    imageUrl: musicNight,
    description:
      'An event poster designed to capture the excitement of a live concert. The atmosphere and typography drive the energy.',
  },
  {
    id: 15,
    title: 'Nike Advertisement Concept',
    category: 'Advertising',
    imageUrl: nikeAd,
    description:
      'A conceptual sports ad combining product imagery with dynamic composition. Built to feel commercial and impactful.',
  },
  {
    id: 16,
    title: 'Moto Event Poster',
    category: 'Event Poster',
    imageUrl: motoPoster,
    description:
      'A high-energy poster built around speed, motion, and illustrated action. Designed to grab attention instantly.',
  },
  {
    id: 17,
    title: 'Dogs Candid',
    category: 'Photography',
    imageUrl: dogsCandid,
    description:
      'A warm candid moment capturing affection and softness. The natural framing gives it emotional honesty.',
  },
  {
    id: 18,
    title: "McDonald's Cultural Ad",
    category: 'Creative Advertising',
    imageUrl: mcdonaldsAd,
    description:
      'A playful concept blending branding with cultural references. The visual is bold, exaggerated, and memorable.',
  },
  {
    id: 19,
    title: 'Red Shadow Concept',
    category: 'Concept Art',
    imageUrl: redShadow,
    description:
      'A minimal dark concept built on silhouette and strong red-black contrast. The mood is mysterious and striking.',
  },
  {
    id: 20,
    title: 'Coffee Brand Mockup',
    category: 'Brand Mockup',
    imageUrl: coffeeMockup,
    description:
      'A realistic storefront mockup showing how café branding works in the real world. Clean, warm, and presentation-ready.',
  },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-16 bg-portfolio-bg/95 backdrop-blur-md flex items-center justify-between px-6 md:px-12 border-b border-portfolio-border">
      <div className="font-serif font-bold text-xl tracking-tighter">G.</div>
      <ul className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
        <li>
          <a href="#home" className="hover:text-portfolio-accent transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-portfolio-accent transition-colors">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-portfolio-accent transition-colors">
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

const MainLayout = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  return (
    <main className="lg:grid lg:grid-cols-[420px_1fr] min-h-screen pt-16">
      <section
        id="home"
        className="lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 p-6 md:p-12 border-r border-portfolio-border flex flex-col justify-between"
      >
        <div>
          <span className="text-portfolio-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">
            Selected Works
          </span>

          <h1 className="font-serif text-[72px] md:text-[80px] leading-[0.85] font-semibold mb-6 tracking-tighter">
            PORT
            <br />
            FOLIO
          </h1>

          <p className="text-lg opacity-60 mb-10 font-light">Creative work by Gowtham</p>

          <a
            href="#portfolio"
            className="inline-flex items-center px-7 py-3.5 bg-portfolio-text text-portfolio-bg text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-portfolio-accent transition-colors"
          >
            View Portfolio
          </a>
        </div>

        <div id="about" className="pt-16 lg:pt-0">
          <h3 className="font-serif text-2xl mb-6 font-medium italic">About</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">
                Name
              </span>
              <span className="font-medium opacity-80">Gowtham</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">
                Email
              </span>
              <a
                href="mailto:gowthamdandu999@gmail.com"
                className="font-medium opacity-80 hover:text-portfolio-accent transition-colors underline underline-offset-4 decoration-portfolio-border"
              >
                gowthamdandu999@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">
                Phone
              </span>
              <span className="font-medium opacity-80">+91 7569562981</span>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="p-6 md:p-12 bg-white lg:overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight">Index of Projects</h2>
          <div className="h-px bg-portfolio-border flex-grow" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square bg-[#F0F0EE] border border-portfolio-border overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                    <Plus className="text-black" size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-portfolio-accent font-bold mb-1">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg leading-tight">{item.title}</h3>
                <p className="text-sm opacity-60 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold border-t border-portfolio-border pt-8 flex justify-between items-center">
          <p>© 2026 GOWTHAM DESIGN STUDIO — ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-portfolio-accent transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-portfolio-accent transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[200] bg-portfolio-bg/98 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button
              className="absolute top-8 right-8 p-3 hover:bg-portfolio-accent/10 rounded-full transition-colors border border-portfolio-border"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>

            <div
              className="max-w-5xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full md:w-1/2 aspect-square border border-portfolio-border bg-white p-4"
              >
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover shadow-sm"
                />
              </motion.div>

              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full md:w-1/2"
              >
                <span className="uppercase tracking-[0.2em] text-[10px] text-portfolio-accent font-bold mb-4 block">
                  Case Study {selectedItem.id}
                </span>

                <h2 className="font-serif text-4xl md:text-5xl mb-6 font-semibold italic leading-tight">
                  {selectedItem.title}
                </h2>

                <div className="space-y-4 mb-10 text-sm opacity-70 leading-relaxed font-light">
                  <p>{selectedItem.description}</p>
                </div>

                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-portfolio-text pb-1 hover:text-portfolio-accent hover:border-portfolio-accent transition-all group">
                  Explore Case
                  <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MainLayout />
    </div>
  )
}
