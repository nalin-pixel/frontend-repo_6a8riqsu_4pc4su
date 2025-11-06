import { motion } from "framer-motion";
import { Rocket, Wrench, Gauge, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Shopify Store Setup",
    desc: "End‑to‑end setup with products, collections, payments, and essential apps.",
    icon: Rocket,
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "Theme Customization",
    desc: "Pixel‑perfect layouts, Liquid tweaks, and bespoke sections that match your brand.",
    icon: Wrench,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Store Speed Optimization",
    desc: "Core Web Vitals, image optimization, app bloat reduction, and caching strategy.",
    icon: Gauge,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Responsive Web Design",
    desc: "Mobile‑first, accessible, and fast interfaces that convert on every device.",
    icon: MonitorSmartphone,
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
            <p className="mt-2 text-white/70">Focused, high‑impact offerings for Shopify and the web.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg shadow-black/20`}>
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
