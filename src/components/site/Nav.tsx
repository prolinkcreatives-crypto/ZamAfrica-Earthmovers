import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/zam-logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#sectors", label: "Sectors" },
  { href: "#work", label: "Work" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 px-3 py-2 pl-3 sm:pl-5 transition-all duration-500 ${
            scrolled ? "bg-black/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "bg-white/5"
          }`}
          style={{ backdropFilter: "blur(24px) saturate(160%)" }}
        >
          <a href="#top" className="flex min-w-0 items-center gap-2.5 group">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] ring-1 ring-white/20 overflow-hidden">
              <img src={logoAsset} alt="ZAM Africa Earthmovers" className="h-10 w-10 object-contain" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[13px] font-bold tracking-tight text-white">
                ZAM Africa
              </span>
              <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.24em] text-gold">
                Earthmovers
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#quote"
              className="hidden sm:inline-flex shine items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.9_0.12_85)] to-[oklch(0.72_0.16_70)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black shadow-[0_8px_24px_-6px_oklch(0.82_0.14_82/0.5)] transition hover:shadow-[0_12px_36px_-6px_oklch(0.82_0.14_82/0.7)] hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/85"
            style={{ backdropFilter: "blur(24px)" }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-4 rounded-3xl border border-white/10 bg-[oklch(0.14_0.014_260)]/95 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
                    <img src={logoAsset} alt="" className="h-9 w-9 object-contain" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-white">Zam Africa</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className="rounded-2xl px-5 py-4 text-2xl font-bold uppercase tracking-tight text-white/85 transition hover:bg-white/5 hover:text-gold"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.9_0.12_85)] to-[oklch(0.72_0.16_70)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black"
                >
                  Get a Quote
                </motion.a>
                <a
                  href="tel:+260976869999"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-4 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4 text-gold" /> +260 976 869 999
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
