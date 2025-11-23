import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-black">
        <Helmet>
          <title>Ratheesh Sekar | Web Developer & Cyber Security Enthusiast</title>
          <meta name="description" content="Portfolio of Ratheesh Sekar - Web Developer and Cyber Security Enthusiast. Explore projects, skills, and achievements." />
          <meta name="keywords" content="Ratheesh Sekar, Web Developer, Cyber Security, React, Portfolio" />
        </Helmet>
        <Navbar />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
