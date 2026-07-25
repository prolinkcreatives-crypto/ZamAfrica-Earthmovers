import { motion } from "framer-motion";
import g1 from "@/assets/gallery/61939-upscaled-4x.jpg";
import g2 from "@/assets/gallery/download_4.jpeg";
import g3 from "@/assets/gallery/61942-upscaled-4x.jpg";
import g4 from "@/assets/gallery/unnamed_7-2.webp";
import g5 from "@/assets/gallery/61941.jpg";
import g6 from "@/assets/gallery/upscalemedia-transformed.jpeg";
import g7 from "@/assets/gallery/upscalemedia-transformed_1.jpeg";
import g8 from "@/assets/gallery/download_1.jpeg";
import g9 from "@/assets/gallery/unnamed_4-2.webp";

const shots = [
  { img: g1, t: "SANY excavator on culvert works", loc: "Civil Works · Drainage", span: "sm:col-span-2 sm:row-span-2" },
  { img: g2, t: "Pipe installation & road crossing", loc: "Road Construction", span: "sm:col-span-2" },
  { img: g3, t: "SANY SY380HD loading Shacman tipper", loc: "Bulk Earthworks", span: "sm:col-span-2" },
  { img: g4, t: "SANY excavator on hillside cut", loc: "Excavation · Site Prep", span: "" },
  { img: g5, t: "Hyundai rock breaker in quarry", loc: "Demolition · Rock Breaking", span: "" },
  { img: g6, t: "CASE TLB clearing overgrowth", loc: "Bush Clearing", span: "" },
  { img: g7, t: "JCB backhoe on civil works site", loc: "Civil Works · Groundworks", span: "" },
  { img: g8, t: "SANY excavator loaded on low-bed", loc: "Equipment Transport", span: "sm:col-span-2" },
  { img: g9, t: "Shacman tipper at aggregate stockpile", loc: "Haulage · Completed Delivery", span: "sm:col-span-2" },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Projects & Site Operations
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our <span className="italic text-gold-gradient">Work</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/55">
            A glimpse into the sites, machines and moments that define our craft.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[180px] lg:auto-rows-[220px]">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${s.span} ${s.span.includes("row-span") ? "" : "aspect-square sm:aspect-auto"}`}
            >
              <motion.img
                src={s.img}
                alt={s.t}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4">
                <div className="glass-strong rounded-xl px-3 py-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-gold">{s.loc}</div>
                  <div className="text-sm font-semibold text-white">{s.t}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
