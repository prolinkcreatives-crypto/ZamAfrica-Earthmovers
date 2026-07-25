import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/zam-logo.jpg";

const cols = [
  {
    t: "Our Services",
    links: [
      "Equipment Hire",
      "Excavation",
      "Road Construction",
      "Bush Clearing",
      "Demolition",
      "Civil Works",
    ],
  },
  {
    t: "Equipment",
    links: [
      "Excavators",
      "TLBs",
      "Bulldozers",
      "Tipper Trucks",
      "Low Bed Trucks",
      "Compactors",
      "Front End Loaders",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.07_0.012_260)] px-4 pb-8 pt-20 sm:px-8 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.3fr]"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg ring-1 ring-white/10">
              <img src={logoAsset} alt="" className="h-11 w-11 object-contain" />
            </span>
            <div>
              <div className="font-display text-sm font-black uppercase tracking-wide text-white">
                Zam Africa
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                Earthmovers
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/45">
            Zambia's premium heavy equipment and civil works partner. Modern fleet, experienced
            operators, uncompromising standards.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[
              { i: Facebook, href: "https://www.facebook.com/profile.php?id=61591197968894&name=xhp_nt__fb__action__open_user" },
              { i: Instagram, href: "https://www.instagram.com/zamafrica_earthmovers?igsh=MXhjamRkeWEzeWNzaA==" },
              { i: MessageCircle, href: "https://wa.me/260976869999" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold transition hover:border-gold/40 hover:bg-gold/10"
              >
                <s.i className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.t}>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
              {c.t}
            </div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-[13px] text-white/50 transition hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Contact
          </div>
          <ul className="space-y-2.5">
            <li>
              <a href="tel:+260976869999" className="flex items-start gap-2.5 text-[13px] text-white/50 transition hover:text-gold">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                +260 976 869 999
              </a>
            </li>
            <li>
              <a href="tel:+260969269999" className="flex items-start gap-2.5 text-[13px] text-white/50 transition hover:text-gold">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                +260 969 269 999
              </a>
            </li>
            <li>
              <a href="mailto:info.zamafricaearthmovers@gmail.com" className="flex items-start gap-2.5 text-[12px] break-all text-white/50 transition hover:text-gold">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                info.zamafricaearthmovers@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-[13px] text-white/40">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              70/70 Road, Spinalong Roundabout, Lusaka, Zambia
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
        <p className="text-[10px] text-white/25">
          © 2025 ZAMAFRICA EARTHMOVERS AND EQUIPMENTS LTD. All Rights Reserved.
        </p>
        <p className="text-[10px] text-white/25">
          Crafted with precision · Zambia
        </p>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return (
    <motion.a
      href="https://wa.me/260976869999"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.16_150)] to-[oklch(0.55_0.14_155)] shadow-[0_10px_30px_-6px_oklch(0.6_0.15_150/0.6)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.72_0.16_150)]/40" />
      <MessageCircle className="relative h-6 w-6 text-white" />
    </motion.a>
  );
}
