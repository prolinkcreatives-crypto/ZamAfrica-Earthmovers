const items = [
  "Excavators", "TLB Hire", "Bulldozers", "Graders", "Front End Loaders",
  "Compactors", "Tipper Trucks", "Low Bed Trucks", "Road Construction",
  "Bulk Earthworks", "Mining Support", "Site Preparation",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-[oklch(0.78_0.15_78)] via-[oklch(0.85_0.13_82)] to-[oklch(0.78_0.15_78)] py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[oklch(0.78_0.15_78)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[oklch(0.78_0.15_78)] to-transparent" />
      <div className="flex animate-[ticker_38s_linear_infinite] whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-black/85">
            <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
