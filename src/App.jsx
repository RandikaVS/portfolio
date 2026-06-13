import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      {/* ambient background grid + scanline overlay */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-scanlines" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}