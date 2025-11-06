import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle, Bot } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import TestimonialsContact from "./components/TestimonialsContact";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <motion.div style={{ scaleX }} className="h-1 origin-left bg-gradient-to-r from-sky-500 to-cyan-400" />
      <div
        className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur transition-all ${
          scrolled ? "border-white/10 bg-slate-900/70" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">MUHAMMAD</span>
          UMAIS
        </a>
        <div className="hidden items-center gap-1 md:flex">
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#work">Projects</LinkItem>
          <LinkItem href="#services">Services</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition-transform hover:scale-[1.02]"
          >
            Hire Me
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur md:hidden">
          <div className="flex flex-col p-2">
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#work">Projects</LinkItem>
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>
        </div>
      )}
    </div>
  );
}

function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur"
      >
        <Bot className="text-cyan-400" size={18} />
        <span className="text-sm tracking-wide">Loading • Muhammad Umais</span>
      </motion.div>
    </div>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mb-3 w-[320px] rounded-2xl border border-white/10 bg-slate-900/90 p-4 text-sm text-white shadow-xl backdrop-blur"
        >
          <div className="mb-3 font-semibold">Let’s Talk</div>
          <div className="mb-3 space-y-2">
            {[
              "I want a new Shopify store",
              "Can you optimize my store speed?",
              "I need theme customization",
            ].map((q) => (
              <button
                key={q}
                onClick={() => {
                  const url = `https://wa.me/923111035944?text=${encodeURIComponent(q)}`;
                  window.open(url, "_blank");
                }}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10"
              >
                {q}
              </button>
            ))}
          </div>
          <a
            href="https://wa.me/923111035944?text=Hi%20Umais,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 font-medium text-white hover:bg-emerald-600"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </motion.div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
      >
        <Bot size={18} /> {open ? "Close" : "Let’s Talk"}
      </button>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923111035944?text=Hi%20Umais,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600"
      aria-label="We’re Online on WhatsApp"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      We’re Online
    </a>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <Navbar />
      {loading && <Loader />}
      <Hero />
      <About />
      <Work />
      <Services />
      <TestimonialsContact />
      <FloatingWhatsApp />
      <ChatWidget />
    </div>
  );
}
