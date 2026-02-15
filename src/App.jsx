import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />  {/* Floating social links */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Ishan Poudel. All rights reserved.
      </footer>
    </>
  );
}

export default App;
