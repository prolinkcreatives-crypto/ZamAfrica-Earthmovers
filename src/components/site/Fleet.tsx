import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import excavatorsImg from "@/assets/fleet/Heavy-Equipment-Excavators.jpg";
import tlbsImg from "@/assets/fleet/Multi-Purpose-TLBs.jpeg";
import bulldozersImg from "@/assets/fleet/Bulldozers.webp";
import frontLoadersImg from "@/assets/fleet/Loading-Front-End-Loaders.jpg";
import tipperImg from "@/assets/fleet/Haulage-tipper-truck.webp";
import lowBedImg from "@/assets/fleet/Transport-Low-Bed-Trucks.jpg";
import gradersImg from "@/assets/fleet/Motor-Graders.jpeg";
import compactorImg from "@/assets/fleet/compactor.jpeg";

const fleet = [
  { img: excavatorsImg, type: "Heavy Equipment", name: "Excavators" },
  { img: tlbsImg, type: "Multi-Purpose", name: "TLBs (JCB / CASE)" },
  { img: bulldozersImg, type: "Land Clearing", name: "Bulldozers" },
  { img: frontLoadersImg, type: "Material Handling", name: "Front End Loaders" },
  { img: tipperImg, type: "Haulage", name: "Tipper Trucks" },
  { img: lowBedImg, type: "Transport", name: "Low Bed Trucks" },
  { img: gradersImg, type: "Road Works", name: "Motor Graders" },
  { img: compactorImg, type: "Compaction", name: "Compactor Rollers" },
];


export function Fleet() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Horizontal drift on scroll (subtle)
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="fleet" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Our Equipment
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Modern <span className="italic text-gold-gradient">Fleet</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/55">
            All machines regularly serviced for maximum uptime on your project.
          </p>
        </div>

        <motion.div
          ref={ref}
          style={{ x }}
          className="scrollbar-none mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        >
          {fleet.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] w-[78vw] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[42vw] lg:w-[26vw]"
            >
              <motion.img
                src={f.img}
                alt={f.name}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/0 via-transparent to-gold/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-gold/10" />

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <motion.div
                  initial={{ y: 8, opacity: 0.9 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="glass-strong inline-flex flex-col rounded-2xl px-4 py-3"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-gold">
                    {f.type}
                  </span>
                  <span className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-white">
                    {f.name}
                  </span>
                </motion.div>
              </div>
              <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 sm:right-6 sm:top-6">
                ↗
              </div>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-2 text-center text-[11px] text-white/40 lg:hidden">Swipe →</p>
      </div>
    </section>
  );
}
