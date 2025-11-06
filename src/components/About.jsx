import { motion } from "framer-motion";

const skills = [
  { name: "Shopify", level: 95, color: "from-cyan-400 to-sky-400" },
  { name: "Web Design", level: 92, color: "from-blue-400 to-cyan-300" },
  { name: "Liquid", level: 90, color: "from-teal-400 to-emerald-300" },
  { name: "SEO Optimization", level: 88, color: "from-fuchsia-400 to-violet-400" },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.08),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold md:text-4xl">About</h2>
          <p className="text-white/80">
            I’m Muhammad Umais, a Shopify and web developer with over 3 years of experience creating high-performing, responsive, and modern online stores. I specialize in Shopify theme customization, Liquid coding, and performance optimization. My top priority is delivering quality work and ensuring client satisfaction.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop"
              alt="Muhammad Umais portrait"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-slate-900/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-white/90">Core Skills & Experience</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
            <Stat kpi="3+" label="Years Experience" />
            <Stat kpi="10+" label="Projects Completed" />
            <Stat kpi="100%" label="Client Satisfaction" />
            <Stat kpi="Performance" label="Optimized" />
          </div>

          <div className="mt-6 space-y-5">
            {skills.map((s) => (
              <div key={s.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{s.name}</span>
                  <span className="text-white/60">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${s.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
    >
      <div className="text-2xl font-bold text-white">{kpi}</div>
      <div className="text-xs text-white/60">{label}</div>
    </motion.div>
  );
}
