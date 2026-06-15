import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Stats } from "@/components/portfolio/Stats";
import { GitHub } from "@/components/portfolio/GitHub";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CloudBackground } from "@/components/portfolio/CloudBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akiti Naveenkumar — Aspiring Cloud Engineer & Data Science Student" },
      { name: "description", content: "Portfolio of Akiti Naveenkumar — B.Tech CSE (Data Science) student from Guntur, India. Aspiring AWS cloud engineer with projects in Flutter, Power BI and Python." },
      { property: "og:title", content: "Akiti Naveenkumar — Aspiring Cloud Engineer" },
      { property: "og:description", content: "Fresher portfolio: AWS basics, Python, Power BI, Flutter — open to internships and entry-level cloud roles." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <CloudBackground />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Stats />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
