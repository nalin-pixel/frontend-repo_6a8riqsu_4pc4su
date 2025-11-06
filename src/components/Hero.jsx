import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-900/40" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/80 backdrop-blur"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            PORTFOLIO • MODERN • INTERACTIVE
          </motion.span>

          <motion.h1
            className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-balance text-base text-white/80 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Shopify & Web Developer crafting elegant, performant experiences with modern tech, smooth animations, and delightful micro‑interactions.
          </motion.p>

          <motion.div
            className="mt-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#about" className="group flex flex-col items-center gap-2 text-xs text-white/70">
            <span>Scroll</span>
            <span className="block h-8 w-[1px] overflow-hidden bg-gradient-to-b from-transparent via-white/60 to-transparent">
              <motion.span
                className="block h-8 w-[1px] bg-white"
                animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
