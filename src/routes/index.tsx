import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Fleet } from "@/components/site/Fleet";
import { Sectors } from "@/components/site/Sectors";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer, FloatingWA } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZAM Africa Earthmovers | Premium Heavy Equipment & Civil Works · Zambia" },
      {
        name: "description",
        content:
          "Zambia's premium earthmoving company. Plant hire, excavation, road construction, demolition and full civil works — modern fleet, expert operators, delivered on time.",
      },
      { property: "og:title", content: "ZAM Africa Earthmovers · Zambia's Heavy Equipment Specialists" },
      {
        property: "og:description",
        content:
          "Modern fleet. Skilled operators. Uncompromising standards. Excavation, road construction, demolition and full project contracting across Zambia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZAM Africa Earthmovers · Premium Earthmoving in Zambia" },
      {
        name: "twitter:description",
        content: "Zambia's premium heavy equipment and civil works partner.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Fleet />
      <Sectors />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  );
}
