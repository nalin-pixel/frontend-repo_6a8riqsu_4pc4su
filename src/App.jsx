import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
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
      <motion.div style={{ scaleX }} className="h-1 origin-left bg-gradient-to-r from-cyan-500 to-violet-500" />
      <div
        className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur transition-all ${
          scrolled ? "border-white/10 bg-slate-900/70" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">DEV</span>
          PORT
        </a>
        <div className="hidden items-center gap-1 md:flex">
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#work">Portfolio</LinkItem>
          <LinkItem href="#services">Services</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02]"
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
            <LinkItem href="#work">Portfolio</LinkItem>
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesInlineAnchor() {
  // Decorative anchor section to ensure nav link works, real cards live in Services component if enabled
  return <div id="services" className="h-1" />;
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <ServicesInlineAnchor />
      <TestimonialsContact />
    </div>
  );
}
