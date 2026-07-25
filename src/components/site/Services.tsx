import { motion } from "framer-motion";
import {
  Pickaxe, Truck, TrafficCone, TreePine, Building, Waves, Forklift, Wrench,
} from "lucide-react";

const services = [
  { i: Pickaxe, t: "Excavation & Trenching", d: "Foundation digging, utility trenching, land clearing and bulk earthmoving using our modern excavator fleet.", tag: "Heavy Machinery" },
  { i: Truck, t: "Plant & Equipment Hire", d: "Short and long-term hire of excavators, TLBs, bulldozers, graders, compactors, loaders and trucks.", tag: "Flexible Terms" },
  { i: TrafficCone, t: "Road Construction", d: "Full road formation, grading, compaction and drainage works for access roads, farm roads and infrastructure.", tag: "Infrastructure" },
  { i: TreePine, t: "Bush Clearing", d: "Large-scale vegetation clearing for farm development, site preparation and residential or commercial projects.", tag: "Site Prep" },
  { i: Building, t: "Demolition & Civil Works", d: "Controlled demolition, rubble removal, site stripping and civil works contracting across Zambia.", tag: "Civil Works" },
  { i: Waves, t: "Fish Pond & Landscaping", d: "Agricultural pond construction, terracing, landscaping and farm development using precision earthmoving.", tag: "Agriculture" },
  { i: Forklift, t: "Front End Loader Hire", d: "Front end loaders for loading, stockpile management and material handling on sites.", tag: "Material Handling" },
  { i: Wrench, t: "Compaction Works", d: "Roller compactors for road sub-base compaction, embankment filling and site preparation.", tag: "Road & Site Works" },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 grid-pattern [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> What We Do
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comprehensive<br />
              <span className="italic text-gold-gradient">Services</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/55">
            From a single machine hire to full project contracting — we have the equipment and
            expertise to deliver.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.t}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-colors hover:border-gold/40"
            >
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(200px_circle_at_var(--mx,50%)_var(--my,0%),oklch(0.82_0.14_82/0.15),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/25 transition-all duration-500 group-hover:from-gold/40 group-hover:shadow-[0_0_30px_-4px_oklch(0.82_0.14_82/0.6)]">
                <s.i className="h-6 w-6" />
              </div>
              <div className="font-display text-lg font-bold uppercase tracking-tight text-white">
                {s.t}
              </div>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/55">{s.d}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80 transition-transform duration-300 group-hover:translate-x-1">
                → {s.tag}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
