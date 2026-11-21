
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer>
        <p>
          © 2026 Vaishnavi Madheswaran.
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
