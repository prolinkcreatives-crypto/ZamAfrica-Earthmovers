import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    q: "ZAM Africa delivered our site prep two weeks ahead of schedule. The operators knew exactly what our project needed.",
    n: "M. Chanda",
    r: "Project Manager · Mining Contractor",
  },
  {
    q: "We hired their TLBs and graders for a rural road build. Reliable machines, professional crew — exactly what we needed.",
    n: "T. Mwansa",
    r: "Civil Engineer",
  },
  {
    q: "Fair pricing, honest timelines, no surprises. This is the standard the Zambian earthmoving industry has been missing.",
    n: "L. Banda",
    r: "Farm Development Client",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[oklch(0.09_0.014_260)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[160px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl text-center">
        <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" /> What Clients Say
        </div>
        <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          Trusted by teams<br />across <span className="italic text-gold-gradient">Zambia</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-strong relative mt-12 rounded-3xl px-6 py-12 sm:px-14 sm:py-16"
          style={{ perspective: 1000 }}
        >
          <Quote className="absolute left-6 top-6 h-10 w-10 text-gold/40 sm:left-10 sm:top-10" />
          <div className="min-h-[180px] sm:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -10 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-xl font-medium leading-relaxed text-white/90 sm:text-2xl lg:text-3xl">
                  "{items[idx].q}"
                </p>
                <div className="mt-8 flex flex-col items-center gap-1">
                  <div className="text-sm font-bold text-white">{items[idx].n}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                    {items[idx].r}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === idx ? "w-10 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
