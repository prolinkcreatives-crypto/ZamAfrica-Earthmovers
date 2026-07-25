import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Play, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import heroAsset from "@/assets/hero.jpg";

const heroLines = [
  [
    { t: "Heavy", gold: false },
    { t: "Equipment,", gold: true },
  ],
  [
    { t: "Real", gold: false },
    { t: "Results", gold: true },
    { t: "—", gold: false },
  ],
  [
    { t: "Across", gold: false },
    { t: "Zambia.", gold: true },
  ],
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mx.set(x * 24);
      my.set(y * 24);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden isolate"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <motion.img
          src={heroAsset}
          alt=""
          className="h-full w-full scale-110 object-cover"
          style={{ x: smx, y: smy, filter: "brightness(0.42) saturate(0.9) contrast(1.05)" }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,22,0.55)_0%,rgba(10,14,22,0.35)_40%,rgba(10,14,22,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,oklch(0.82_0.14_82/0.18),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 -z-10 h-96 w-96 rounded-full bg-gold/25 blur-[120px]"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-[420px] w-[420px] rounded-full bg-[oklch(0.35_0.12_260)]/40 blur-[140px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40"
        style={{ y: contentY }}
      >

        {/* Headline */}
        <h1 className="max-w-5xl font-display text-[13vw] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-[9vw] lg:text-[7.2vw] xl:text-[112px]">
          {heroLines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.05,
                  ease: [0.77, 0, 0.175, 1],
                  delay: 0.35 + li * 0.14,
                }}
              >
                {line.map((w, wi) => (
                  <span
                    key={wi}
                    className={
                      w.gold
                        ? "italic text-gold-gradient [text-shadow:0_0_60px_oklch(0.82_0.14_82/0.35)]"
                        : ""
                    }
                  >
                    {w.t}
                    {wi < line.length - 1 ? " " : ""}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base"
        >
          Plant hire, civil works, and complete project contracting — backed by a modern fleet
          and experienced operators, delivering on time, every time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <MagneticButton href="#quote" primary>
            Request a Quote <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#fleet">
            <Play className="h-4 w-4 text-gold" /> View Our Fleet
          </MagneticButton>
        </motion.div>

        {/* Floating stats cards */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {[
            { n: 200, s: "+", label: "Projects" },
            { n: 200, s: "+", label: "Clients Served" },
            { n: 6, s: "", label: "Years" },
            { n: 25, s: "", label: "Team Members" },
          ].map((st, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.45 + i * 0.08, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="glass-strong group relative overflow-hidden rounded-2xl p-4 sm:p-5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gold/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="font-display text-3xl font-black text-gold-gradient sm:text-4xl">
                <Counter to={st.n} suffix={st.s} />
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                {st.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/50"
        >
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Safety-first operations
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" /> Lusaka · Nationwide
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Modern maintained fleet
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.36em] text-white/40">
          Scroll
        </span>
        <div className="h-10 w-px overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-full bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={
        primary
          ? "shine group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.9_0.12_85)] to-[oklch(0.72_0.16_70)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-black shadow-[0_18px_50px_-14px_oklch(0.82_0.14_82/0.6)] transition-shadow hover:shadow-[0_24px_60px_-14px_oklch(0.82_0.14_82/0.85)]"
          : "glass-strong inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-gold/40 hover:text-gold"
      }
    >
      {children}
    </motion.a>
  );
}
