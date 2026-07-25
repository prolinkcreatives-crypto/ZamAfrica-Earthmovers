import { motion } from "framer-motion";
import { Pickaxe, Building2, TrafficCone, Sprout, Store, Home } from "lucide-react";

const sectors = [
  { n: "01", i: Pickaxe, t: "Mining", items: ["Open-cast & alluvial mining support", "Overburden removal", "Bulk material haulage", "Pit excavation & stripping"] },
  { n: "02", i: Building2, t: "Construction", items: ["Foundation digging", "Site preparation & clearing", "Demolition works", "Trenching & pipe laying"] },
  { n: "03", i: TrafficCone, t: "Infrastructure", items: ["Road construction & grading", "Drainage & culvert installation", "Bridge approaches", "Municipal earthworks"] },
  { n: "04", i: Sprout, t: "Agriculture", items: ["Bush clearing & land opening", "Fish pond construction", "Farm road development", "Irrigation earthworks"] },
  { n: "05", i: Store, t: "Commercial", items: ["Commercial site preparation", "Bulk earthworks", "Landscaping & grading", "Industrial plant setup"] },
  { n: "06", i: Home, t: "Residential", items: ["Plot clearing & levelling", "Driveway construction", "Septic & soakaway excavation", "Compound preparation"] },
];

export function Sectors() {
  return (
    <section id="sectors" className="relative overflow-hidden bg-[oklch(0.11_0.014_260)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 grid-pattern" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" /> Industries We Serve
        </div>
        <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our <span className="italic text-gold-gradient">Sectors</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass group relative overflow-hidden rounded-3xl p-7"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.i className="h-6 w-6" />
                </div>
                <span className="font-display text-4xl font-black italic text-white/10 transition-colors duration-500 group-hover:text-gold/25">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-white">
                {s.t}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13px] text-white/55">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
