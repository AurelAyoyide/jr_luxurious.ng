import React, { useState } from 'react';
import { VaultIntro } from './components/VaultIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionGrid } from './components/CollectionGrid';
import { FeaturedSection } from './components/FeaturedSection';
import { AuthenticationTimeline } from './components/AuthenticationTimeline';
import { InvestmentChart } from './components/InvestmentChart';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <VaultIntro onComplete={() => setIntroComplete(true)} />
      )}
      
      {/* 
        We render the main app but keep it hidden or underneath until intro is done 
        for smoother transition, or conditionally render. 
        Here we conditionally render to save resources, but we could also opacity fade.
      */}
      {introComplete && (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <FeaturedSection />
          <CollectionGrid />
          <AuthenticationTimeline />
          <InvestmentChart />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
