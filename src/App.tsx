import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import FilteredGallery from './components/FilteredGallery';
import ProjectDNA from './components/ProjectDNA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import AccessibilityWidget from './components/AccessibilityWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-1/2 focus:translate-x-1/2 focus:z-[100] focus:bg-white focus:text-[#0f172a] focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-2xl focus:font-bold focus:border-2 focus:border-accent"
      >
        דילוג לתוכן המרכזי
      </a>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <ProcessTimeline />
        <BeforeAfterSlider />
        <FilteredGallery />
        <ProjectDNA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
