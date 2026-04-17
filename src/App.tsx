/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ExternalLink, X, Plus } from 'lucide-react';

// --- Types ---

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

// --- Data ---

const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: i % 3 === 0 ? 'Digital Design' : i % 3 === 1 ? 'Photography' : 'Branding',
  imageUrl: `https://picsum.photos/seed/gowtham-${i + 1}/800/800`,
}));

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-16 bg-portfolio-bg flex items-center justify-between px-6 md:px-12 border-b border-portfolio-border">
      <div className="font-serif font-bold text-xl tracking-tighter">G.</div>
      <ul className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
        <li>
          <a href="#home" className="hover:text-portfolio-accent transition-colors">Home</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-portfolio-accent transition-colors">Portfolio</a>
        </li>
        <li>
          <a href="#about" className="hover:text-portfolio-accent transition-colors">About</a>
        </li>
      </ul>
    </nav>
  );
};

const MainLayout = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <main className="lg:grid lg:grid-cols-[420px_1fr] min-h-screen pt-16">
      {/* Left Panel: Hero + About */}
      <section id="home" className="lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 p-6 md:p-12 border-r border-portfolio-border flex flex-col justify-between">
        <div>
          <span className="text-portfolio-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">Selected Works</span>
          <h1 className="font-serif text-[72px] md:text-[80px] leading-[0.85] font-semibold mb-6 tracking-tighter">
            PORT<br />FOLIO
          </h1>
          <p className="text-lg opacity-60 mb-10 font-light">Creative work by Gowtham</p>
          <a 
            href="#portfolio" 
            className="inline-flex items-center px-7 py-3.5 bg-portfolio-text text-portfolio-bg text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-portfolio-accent transition-colors"
          >
            View Portfolio
          </a>
        </div>

        {/* About Summary at the bottom of left panel */}
        <div id="about" className="pt-16 lg:pt-0">
          <h3 className="font-serif text-2xl mb-6 font-medium italic">About</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">Name</span>
              <span className="font-medium opacity-80">Gowtham</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">Email</span>
              <a href="mailto:gowthamdandu999@gmail.com" className="font-medium opacity-80 hover:text-portfolio-accent transition-colors underline underline-offset-4 decoration-portfolio-border">
                gowthamdandu999@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-portfolio-accent tracking-widest min-w-[60px]">Phone</span>
              <span className="font-medium opacity-80">+91 99900 00000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel: Gallery */}
      <section id="portfolio" className="p-6 md:p-12 bg-white lg:overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight">Index of Projects</h2>
          <div className="h-px bg-portfolio-border flex-grow" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square bg-[#F0F0EE] border border-portfolio-border cursor-pointer group flex items-center justify-center overflow-hidden"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-portfolio-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-white" size={24} strokeWidth={3} />
              </div>
              <span className="text-[11px] font-bold opacity-20 group-hover:opacity-0 transition-opacity">0{item.id}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold border-t border-portfolio-border pt-8 flex justify-between items-center">
          <p>© 2026 GOWTHAM DESIGN STUDIO — ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-portfolio-accent transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-portfolio-accent transition-colors">LINKEDIN</a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Preserved Functionality) */}
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
              className="max-w-4xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center"
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
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover shadow-sm"
                />
              </motion.div>
              <motion.div 
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full md:w-1/2"
              >
                <span className="uppercase tracking-[0.2em] text-[10px] text-portfolio-accent font-bold mb-4 block">Case Study {selectedItem.id}</span>
                <h2 className="font-serif text-5xl mb-6 font-semibold italic leading-tight">{selectedItem.title}</h2>
                <div className="space-y-4 mb-10 text-sm opacity-70 leading-relaxed font-light">
                  <p className="text-balance">A focused exploration of minimal aesthetics in {selectedItem.category}. This piece highlights the structural clarity and quiet confidence that defines modern design systems.</p>
                </div>
                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-portfolio-text pb-1 hover:text-portfolio-accent hover:border-portfolio-accent transition-all group">
                  EXPLORE CASE <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
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
