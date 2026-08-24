import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhatIBuild } from './components/sections/WhatIBuild';
import { Projects } from './components/sections/Projects';
import { AIAutomation } from './components/sections/AIAutomation';
import { Architecture } from './components/sections/Architecture';
import { Skills } from './components/sections/Skills';
import { GitHubLab } from './components/sections/GitHubLab';
import { JourneyTimeline } from './components/sections/JourneyTimeline';
import { CurrentlyLearning } from './components/sections/CurrentlyLearning';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { AppearanceStudio } from './components/studio/AppearanceStudio';
import { CursorSpotlight } from './components/ui/CursorSpotlight';
import { useAppearance } from './hooks/useAppearance';

export function App() {
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const { settings, setPreset, updateSetting } = useAppearance();

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      {/* Subtle Cursor Ambient Spotlight */}
      <CursorSpotlight enabled={settings.spotlightEnabled} />

      {/* Floating Capsule Navbar */}
      <Navbar onOpenStudio={() => setIsStudioOpen(true)} />

      {/* Main Content Progression */}
      <main className="flex-grow">
        {/* 1. Hero Section + Interactive AI Core */}
        <Hero onOpenStudio={() => setIsStudioOpen(true)} />

        {/* 2. What I Build (4 Expandable Architecture Pillars) */}
        <WhatIBuild />

        {/* 3. Selected Builds (FlowPilot Centerpiece, Jarvis AI, Karya Pharmacy) */}
        <Projects />

        {/* 4. AI & Automation (Multi-Agent Execution Pipeline) */}
        <AIAutomation />

        {/* 5. System Architecture Blueprint */}
        <Architecture />

        {/* 6. Connected Technology Stack */}
        <Skills />

        {/* 7. GitHub & Open Source Lab (@sejalpatel9875-del) */}
        <GitHubLab />

        {/* 8. Learning Journey Timeline */}
        <JourneyTimeline />

        {/* 9. Currently Exploring & Building */}
        <CurrentlyLearning />

        {/* 10. About ("I learn by building.") */}
        <About />

        {/* 11. Contact Protocol ("LET'S BUILD SOMETHING.") */}
        <Contact />
      </main>

      {/* 12. Minimalist Footer */}
      <Footer />

      {/* Adaptive Appearance Studio Customization Drawer */}
      <AppearanceStudio
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        settings={settings}
        setPreset={setPreset}
        updateSetting={updateSetting}
      />
    </div>
  );
}

export default App;
