import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn } from "lucide-react";

const projects = [
  {
    title: "Shopify Fashion Store",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify", "Theme", "Speed"],
    link: "#",
  },
  {
    title: "Cosmetics DTC Brand",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop",
    tags: ["Design", "Conversion", "UX"],
    link: "#",
  },
  {
    title: "Tech Accessories Store",
    image:
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify", "Liquid", "Apps"],
    link: "#",
  },
  {
    title: "Minimal Agency Website",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Web Design", "SEO", "Motion"],
    link: "#",
  },
  {
    title: "Gourmet Storefront",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify", "Customization", "Speed"],
    link: "#",
  },
  {
    title: "Home Decor Brand",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    tags: ["Design", "UX", "Conversion"],
    link: "#",
  },
];

export default function Work() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="work" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(14,165,233,0.08),transparent),radial-gradient(80%_60%_at_80%_40%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Professional Projects</h2>
            <p className="mt-2 text-white/70">Realistic Shopify and web design case studies with clean execution.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition-colors hover:bg-white/10 md:block"
          >
            Start your project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-6 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-white/70">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightbox(p.image)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur transition hover:bg-white/20"
                  >
                    <ZoomIn size={18} />
                  </button>
                  <a
                    href={p.link}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Preview"
              className="max-h-[80vh] w-auto max-w-5xl rounded-xl shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
