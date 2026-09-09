import { ParallaxBackground } from "./components/ParallaxBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-fg">
      <ParallaxBackground />
      <Header />
      <main
        id="top"
        className="relative z-[1] mx-auto max-w-content px-[22px]"
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
