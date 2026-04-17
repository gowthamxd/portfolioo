/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Plus } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Abandoned Jeep – Nature Reclaiming',
    category: 'Photography',
    imageUrl: '/jeep-nature.jpg',
    description:
      'A visually striking photograph of an abandoned jeep being slowly reclaimed by nature. The frame highlights the contrast between industrial decay and organic growth. Rich greenery and layered textures give the image a strong storytelling quality. It reflects time, silence, and the beauty of neglect.',
  },
  {
    id: 2,
    title: 'Wedding Album Cover',
    category: 'Album Design',
    imageUrl: '/wedding-collage.jpg',
    description:
      'A romantic collage-style album cover designed to preserve emotional wedding moments. The layout brings together intimate portraits and ceremonial details in a visually balanced composition. Soft tones and layered imagery enhance the storytelling. This work blends photography with editorial presentation.',
  },
  {
    id: 3,
    title: 'Vintage Pottery Store',
    category: 'Photography',
    imageUrl: '/ashirvad-store.jpg',
    description:
      'A rustic storefront image that captures heritage, craft, and local character. The worn signage and earthy pottery textures create a nostalgic atmosphere. Composition and color work together to highlight authenticity. It is a cultural photograph rooted in place and detail.',
  },
  {
    id: 4,
    title: 'Bloomscape Brochure',
    category: 'Editorial Design',
    imageUrl: '/bloomscape-brochure.jpg',
    description:
      'A clean brochure concept designed for a greenery and interior styling brand. The layout uses strong typography, contrast, and structure to guide the eye. Minimalism is balanced with visual identity to create a premium editorial feel. This project demonstrates branding through print-style design.',
  },
  {
    id: 5,
    title: 'Floral Water Composition',
    category: 'Photography',
    imageUrl: '/flower-water.jpg',
    description:
      'A serene composition featuring floating floral elements arranged in vivid color layers. The image relies on repetition, symmetry, and strong contrast to create visual calm. The warm palette gives it a ceremonial and artistic feel. It turns a simple subject into an emotionally rich frame.',
  },
  {
    id: 6,
    title: 'Cat Portrait',
    category: 'Photography',
    imageUrl: '/cat-portrait.jpg',
    description:
      'A candid animal portrait focused on mood, expression, and natural framing. The shallow depth and soft background separation bring attention directly to the subject. The dark leafy surroundings create a cinematic environment. It is a quiet image built on patience and observation.',
  },
  {
    id: 7,
    title: 'University Admission Poster',
    category: 'Poster Design',
    imageUrl: '/university-poster.jpg',
    description:
      'A bold promotional poster designed for an academic admissions campaign. The composition combines student imagery, institutional visuals, and strong callout text for quick attention. Bright color choices make the design highly visible and promotional. It is built for clarity, reach, and engagement.',
  },
  {
    id: 8,
    title: 'Nike Endurance Campaign',
    category: 'Brand Campaign',
    imageUrl: '/nike-endurance.jpg',
    description:
      'A performance-driven sports campaign visual centered on endurance and movement. The large type and close-up product shot create a powerful advertising feel. The cool-toned palette reinforces energy and athletic focus. This project reflects modern brand communication in sportswear.',
  },
  {
    id: 9,
    title: 'Android Logo Recreation',
    category: 'Logo Design',
    imageUrl: '/android-logo.jpg',
    description:
      'A simplified recreation of the Android mascot using clean geometric construction. The design focuses on symmetry, proportion, and recognizability. Bright green keeps the icon instantly familiar and platform-specific. It demonstrates precision in minimal logo and icon design.',
  },
  {
    id: 10,
    title: 'Spider-Verse Bookmark',
    category: 'Creative Design',
    imageUrl: '/spiderman-bookmark.jpg',
    description:
      'A stylized bookmark inspired by comic-book storytelling and Spider-Verse aesthetics. The composition uses layered characters, vibrant contrast, and playful typography to create a collectible feel. It is visually dynamic while staying vertically balanced for format. This piece combines fandom with graphic experimentation.',
  },
  {
    id: 11,
    title: 'Nike Green AI Product Visual',
    category: 'AI Product Visual',
    imageUrl: '/nike-green.jpg',
    description:
      'A futuristic shoe visualization created with a high-impact commercial style. Motion effects, debris, and lighting create a sense of speed and product energy. The neon green shoe becomes the clear focal point against a dark environment. It blends product advertising with AI-assisted image styling.',
  },
  {
    id: 12,
    title: 'Cult Fit Logo',
    category: 'Logo Design',
    imageUrl: '/cult-fit-logo.jpg',
    description:
      'A minimal fitness logo concept built with bold geometry and strong symmetry. The dumbbell-inspired symbol and octagonal frame create a direct, memorable identity. Black-on-light contrast keeps the mark sharp and scalable. It is designed for clarity, branding, and visual recall.',
  },
  {
    id: 13,
    title: 'Nike Orange Product Focus',
    category: 'Product Design',
    imageUrl: '/nike-orange.jpg',
    description:
      'A clean, product-centered visual focused on material, shape, and color contrast. The composition highlights the sole pattern and bright accent detailing in a polished commercial style. The minimal background keeps the product as the hero element. It feels premium, modern, and retail-ready.',
  },
  {
    id: 14,
    title: 'Music Night Poster',
    category: 'Event Poster',
    imageUrl: '/music-night.jpg',
    description:
      'An event poster built to capture the excitement of a live concert atmosphere. Large typography, date placement, and crowd visuals create immediate readability and energy. The warm stage lighting enhances the mood and scale. It is designed for promotion, visibility, and event branding.',
  },
  {
    id: 15,
    title: 'Nike Advertisement Concept',
    category: 'Advertising',
    imageUrl: '/nike-ad.jpg',
    description:
      'A conceptual sports ad combining product photography with energetic fashion styling. The bold angle of the shoe gives the layout strong forward movement. Text placement and color contrast support a branded commercial aesthetic. It is a campaign-style visual designed for impact.',
  },
  {
    id: 16,
    title: 'Moto Event Poster',
    category: 'Event Poster',
    imageUrl: '/moto-poster.jpg',
    description:
      'A high-energy event poster built around action, illustration, and speed. The bike rider graphic becomes the central attention point, supported by expressive splashes and bold text. The layout communicates excitement in a quick and accessible way. It is designed to attract an event audience instantly.',
  },
  {
    id: 17,
    title: 'Dogs Candid',
    category: 'Photography',
    imageUrl: '/dogs-candid.jpg',
    description:
      'A warm candid photograph capturing a naturally affectionate moment between puppies. The circular composition formed by the bodies creates visual softness and emotional charm. Grass texture and neutral lighting keep the frame honest and grounded. It is a simple but heartfelt storytelling image.',
  },
  {
    id: 18,
    title: "McDonald's Cultural Ad",
    category: 'Creative Advertising',
    imageUrl: '/mcdonalds-ad.jpg',
    description:
      'A playful concept ad that combines food branding with cultural visual references. The composition is intentionally bold and humorous, using contrast between the subject, setting, and iconography. It explores advertising through exaggeration and visual storytelling. This piece shows conceptual thinking in branded content.',
  },
  {
    id: 19,
    title: 'Red Shadow Concept',
    category: 'Concept Art',
    imageUrl: '/red-shadow.jpg',
    description:
      'A striking minimal concept image built on silhouette, texture, and intense color contrast. The red background and glowing eyes create instant tension and mystery. The simplicity of the form makes the mood even stronger. It is an example of atmosphere-driven visual storytelling.',
  },
  {
    id: 20,
    title: 'Coffee Brand Mockup',
    category: 'Brand Mockup',
    imageUrl: '/coffee-mockup.jpg',
    description:
      'A realistic storefront mockup presenting a coffee logo in a real-world setting. The signage placement helps visualize how the brand would function in public space. Warm brown tones reinforce the café identity and product category. It is a presentation-focused piece that strengthens logo credibility.',
  },
];

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
  );
};

const MainLayout = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MainLayout />
    </div>
  );
}