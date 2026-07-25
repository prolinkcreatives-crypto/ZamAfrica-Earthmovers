import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const services = [
  "Excavator Hire", "TLB Hire", "Grader Hire", "Bulldozer Hire",
  "Front End Loader Hire", "Compactor Hire", "Tipper Truck Hire",
  "Low Bed Truck Hire", "Road Construction", "Excavation & Trenching",
  "Bush Clearing", "Demolition", "Full Project Contracting", "Other",
];
const durations = ["1 Day", "1 Week", "2 Weeks", "1 Month", "3+ Months", "Full Project"];

export function Contact() {
  const [f, setF] = useState({ n: "", p: "", e: "", s: "", l: "", d: "", m: "" });

  const validate = () => {
    if (!f.n.trim()) return alert("Please enter your full name."), false;
    if (!f.p.trim()) return alert("Please enter your phone number."), false;
    if (!f.s) return alert("Please select a service."), false;
    return true;
  };

  const sendWA = () => {
    if (!validate()) return;
    const enc = encodeURIComponent;
    const msg =
      `Hello ZAM Africa Earthmovers!\n\nI would like to request a quote.\n\n` +
      `*Name:* ${f.n}\n*Phone:* ${f.p}\n` +
      (f.e ? `*Email:* ${f.e}\n` : "") +
      `*Service:* ${f.s}\n` +
      (f.l ? `*Location:* ${f.l}\n` : "") +
      (f.d ? `*Duration:* ${f.d}\n` : "") +
      (f.m ? `\n*Details:*\n${f.m}` : "");
    window.open(`https://wa.me/260976869999?text=${enc(msg)}`, "_blank");
  };

  const sendEM = () => {
    if (!validate()) return;
    const sub = `Quote Request - ${f.s} | ZAM Africa Earthmovers`;
    const body =
      `Hello ZAM Africa Earthmovers,\n\nI would like to request a quote:\n\n` +
      `Name: ${f.n}\nPhone: ${f.p}` +
      (f.e ? `\nEmail: ${f.e}` : "") +
      `\nService: ${f.s}` +
      (f.l ? `\nLocation: ${f.l}` : "") +
      (f.d ? `\nDuration: ${f.d}` : "") +
      (f.m ? `\n\nDetails:\n${f.m}` : "") +
      `\n\nThank you.`;
    window.location.href = `mailto:info.zamafricaearthmovers@gmail.com?subject=${encodeURIComponent(
      sub
    )}&body=${encodeURIComponent(body)}`;
  };

  const contact = [
    { i: Phone, l: "Call Us", v: "+260 976 869 999", href: "tel:+260976869999", tone: "gold" },
    { i: MessageCircle, l: "WhatsApp", v: "+260 976 869 999", href: "https://wa.me/260976869999", tone: "green" },
    { i: MessageCircle, l: "WhatsApp (Alt)", v: "+260 969 269 999", href: "https://wa.me/260969269999", tone: "green" },
    { i: Mail, l: "Email", v: "info.zamafricaearthmovers@gmail.com", href: "mailto:info.zamafricaearthmovers@gmail.com", tone: "blue" },
    { i: MapPin, l: "Location", v: "70/70 Road, Spinalong Roundabout, Lusaka", href: "#", tone: "gold" },
  ];

  const toneClass = (t: string) =>
    t === "green"
      ? "bg-[oklch(0.7_0.15_150)]/15 text-[oklch(0.85_0.15_150)] ring-[oklch(0.7_0.15_150)]/25"
      : t === "blue"
      ? "bg-[oklch(0.6_0.15_240)]/15 text-[oklch(0.78_0.13_240)] ring-[oklch(0.6_0.15_240)]/25"
      : "bg-gold/15 text-gold ring-gold/25";

  return (
    <section id="quote" className="relative overflow-hidden bg-[oklch(0.09_0.014_260)] px-4 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 grid-pattern [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" /> Get in Touch
          </div>
          <h2 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to get <span className="italic text-gold-gradient">moving?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/55">
            Tell us about your project and we'll get back to you with a tailored quote.
            We serve all of Zambia — no project too large or too small.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 min-w-0">
          {/* Contact cards */}
          <div className="space-y-3">
            {contact.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-gold/30"
              >
                <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ${toneClass(c.tone)}`}>
                  <c.i className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">{c.l}</div>
                  <div className="mt-0.5 truncate text-sm font-semibold text-white">{c.v}</div>
                </div>
                <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-gold">→</span>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); sendEM(); }}
            className="glass-strong w-full min-w-0 max-w-full rounded-3xl p-5 sm:p-8"
          >
            <div className="mb-6">
              <div className="font-display text-lg font-bold uppercase tracking-tight text-white">
                Get Your Free Quote
              </div>
              <div className="mt-1 text-[12px] text-white/45">
                Fill in the form — we respond within 24 hours
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Full Name *">
                <input value={f.n} onChange={(e) => setF({ ...f, n: e.target.value })} placeholder="Your full name" />
              </Field>
              <Field label="Phone / WhatsApp *">
                <input value={f.p} onChange={(e) => setF({ ...f, p: e.target.value })} placeholder="+260 ..." />
              </Field>
            </div>
            <Field label="Email">
              <input type="email" value={f.e} onChange={(e) => setF({ ...f, e: e.target.value })} placeholder="you@email.com" />
            </Field>
            <Field label="Service Required *">
              <select value={f.s} onChange={(e) => setF({ ...f, s: e.target.value })}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Location">
                <input value={f.l} onChange={(e) => setF({ ...f, l: e.target.value })} placeholder="Town / Province" />
              </Field>
              <Field label="Duration">
                <select value={f.d} onChange={(e) => setF({ ...f, d: e.target.value })}>
                  <option value="">Duration</option>
                  {durations.map((d) => <option key={d}>{d}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Details">
              <textarea rows={3} value={f.m} onChange={(e) => setF({ ...f, m: e.target.value })} placeholder="Describe your project..." />
            </Field>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={sendWA}
                className="shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.68_0.16_150)] to-[oklch(0.55_0.14_155)] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <button
                type="submit"
                className="shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.9_0.12_85)] to-[oklch(0.72_0.16_70)] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> Send via Email
              </button>
            </div>
            <div className="mt-3 text-center text-[10px] text-white/25">
              We reply within 24 hours · No spam · Zambia-wide
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
        {label}
      </span>
      <div className="[&_input]:box-border [&_input]:block [&_input]:w-full [&_input]:max-w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-white/10 [&_input]:bg-white/[0.04] [&_input]:px-3.5 [&_input]:py-3 [&_input]:text-[13.5px] [&_input]:text-white [&_input]:outline-none [&_input:focus]:border-gold/50 [&_input:focus]:bg-white/[0.06] [&_input]:transition [&_input]:placeholder:text-white/25 [&_select]:box-border [&_select]:block [&_select]:w-full [&_select]:max-w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-white/10 [&_select]:bg-white/[0.04] [&_select]:px-3.5 [&_select]:py-3 [&_select]:text-[13.5px] [&_select]:text-white [&_select]:outline-none [&_select:focus]:border-gold/50 [&_select]:transition [&_textarea]:box-border [&_textarea]:block [&_textarea]:w-full [&_textarea]:max-w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:bg-white/[0.04] [&_textarea]:px-3.5 [&_textarea]:py-3 [&_textarea]:text-[13.5px] [&_textarea]:text-white [&_textarea]:outline-none [&_textarea:focus]:border-gold/50 [&_textarea]:transition [&_textarea]:placeholder:text-white/25 [&_textarea]:resize-none [&_option]:bg-[oklch(0.15_0.014_260)]">
        {children}
      </div>
    </label>
  );
}
