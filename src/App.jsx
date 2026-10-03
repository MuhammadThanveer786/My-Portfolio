import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <Analytics />
    </div>
  );
}

export default App;