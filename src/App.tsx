import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { WhyWorkWithMe } from './components/sections/WhyWorkWithMe';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Business & Portfolio Websites');

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      {/* Floating Capsule Navbar with Theme Toggle */}
      <Navbar />

      {/* Main Client Journey */}
      <main className="flex-grow">
        {/* 1. Client-Focused Hero */}
        <Hero />

        {/* 2. Services & Solutions (Lead Generator) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 3. Case Studies & Real Work (Proof of Competence) */}
        <Projects />

        {/* 4. Why Work With Me (Trust & Value Prop) */}
        <WhyWorkWithMe />

        {/* 5. Connected Technology Stack */}
        <Skills />

        {/* 6. Professional Background & Ethos */}
        <About />

        {/* 7. High-Converting Contact & Project Scope Form */}
        <Contact initialProjectType={selectedService} />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
