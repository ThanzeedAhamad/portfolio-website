import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Highlights />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>Designed and built by Thanzeed Ahamad</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
