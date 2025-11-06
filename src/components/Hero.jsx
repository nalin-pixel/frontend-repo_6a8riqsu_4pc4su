import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#071a2e] via-[#0a2036] to-[#041422] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(34,211,238,0.12),transparent),radial-gradient(40%_40%_at_80%_70%,rgba(14,165,233,0.1),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041422]/80 via-transparent to-transparent" />
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
            SHOPIFY • PERFORMANCE • MODERN
          </motion.span>

          <motion.h1
            className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-white">Muhammad Umais</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-balance text-base text-cyan-100 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Shopify & Web Developer building fast, responsive, and high‑converting stores. Clean code, smooth motion, and a focus on results.
          </motion.p>

          <motion.div
            className="mt-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              View Projects
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
