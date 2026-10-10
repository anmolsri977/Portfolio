import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DeveloperStats } from './components/DeveloperStats';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-brand-500/20 selection:text-brand-300 overflow-x-hidden">
      {/* Background Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <DeveloperStats />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
