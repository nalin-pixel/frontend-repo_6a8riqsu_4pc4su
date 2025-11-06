import { motion } from "framer-motion";
import { Star, Send, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ayesha K.",
    role: "Founder, DTC Brand",
    quote:
      "Umais delivered a fast, responsive Shopify store beyond expectations. Highly recommend!",
  },
  {
    name: "Noah L.",
    role: "E‑commerce Lead",
    quote:
      "From theme customization to speed optimization, everything was handled professionally and on time.",
  },
  {
    name: "Sofia R.",
    role: "Marketing Manager",
    quote:
      "Clear communication, pixel‑perfect execution, and measurable performance gains.",
  },
];

export default function TestimonialsContact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 1000);
  }

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(34,211,238,0.12),transparent),radial-gradient(50%_50%_at_80%_60%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">What Clients Say</h2>
          <div className="mt-6 space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-4 text-sm text-white/60">
                  {t.name} • {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Let’s build something great</h2>
          <p className="mt-2 text-white/70">Tell me about your project and timeline. I’ll reply within 24 hours.</p>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                required
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-cyan-500"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <input
              placeholder="Company / Brand"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              required
              rows="5"
              placeholder="Project details, goals, and timeline..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-cyan-500"
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status !== "idle"}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                <Send size={16} />
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "sent" && "Sent!"}
              </button>
              <a
                href="https://wa.me/+92-3111035944?text=Hi%20Umais,%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-600"
              >
                <MessageCircle size={16} /> Send Message on WhatsApp
              </a>
            </div>
          </motion.form>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-white/70">
            <a href="https://github.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur hover:bg-white/10">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur hover:bg-white/10">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur hover:bg-white/10">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/60 md:flex-row">
          <div>© 2025 Muhammad Umais | All Rights Reserved</div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
