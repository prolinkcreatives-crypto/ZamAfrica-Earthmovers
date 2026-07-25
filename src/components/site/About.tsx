import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, HardHat, ShieldCheck } from "lucide-react";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";

const feats = [
  { icon: Building2, t: "Modern Fleet", d: "Well-maintained excavators, TLBs, bulldozers, graders, tippers and low-beds for short or long-term hire." },
  { icon: HardHat, t: "Experienced Operators", d: "Skilled operators with expertise across mining, construction and agriculture throughout Zambia." },
  { icon: ShieldCheck, t: "Safety First", d: "Rigorous safety protocols on every project site, protecting our team, clients and the public." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
        {/* Image cluster with mask reveals */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <motion.img
              src={a1}
              alt="ZAM Africa excavation"
              className="h-full w-full object-cover"
              initial={{ scale: 1.3, clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { scale: 1, clipPath: "inset(0 0 0 0)" } : {}}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -right-4 hidden aspect-[4/3] w-2/3 overflow-hidden rounded-2xl border-4 border-[oklch(0.14_0.014_260)] shadow-2xl sm:block"
          >
            <img src={a2} alt="Fleet yard" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
            animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9, type: "spring", stiffness: 100 }}
            className="glass-strong absolute -left-3 top-8 hidden rounded-2xl px-5 py-4 text-center sm:block"
          >
            <div className="font-display text-4xl font-black text-gold-gradient">6</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
              Years of<br />Excellence
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-4 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold"
          >
            <span className="h-px w-8 bg-gold" /> About ZAM Africa
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Trusted heavy<br /> equipment partner<br />across <span className="italic text-gold-gradient">Zambia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60"
          >
            ZAM Africa Earthmovers delivers safe, reliable, and cost-effective earthmoving and
            civil works solutions across Zambia. We operate a modern fleet with experienced
            operators dedicated to completing your project on time and within budget.
          </motion.p>

          <div className="mt-10 space-y-3">
            {feats.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass group flex gap-4 rounded-2xl p-5 transition-colors hover:border-gold/30"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all group-hover:bg-gold/20 group-hover:shadow-[0_0_24px_-4px_oklch(0.82_0.14_82/0.5)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold uppercase tracking-wide text-white">{f.t}</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-white/55">{f.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
