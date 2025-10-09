
import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CreatorBanner from './components/sections/CreatorBanner';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Dashboard from './components/dashboard/Dashboard';
import RegistrationForm from './components/forms/RegistrationForm';
import BackgroundAnimations from './components/ui/BackgroundAnimations';

export default function App() {
  const [isDashboardVisible, setDashboardVisible] = useState(false);
  const [isRegistrationVisible, setRegistrationVisible] = useState(false);

  if (isDashboardVisible) {
    return <Dashboard closeDashboard={() => setDashboardVisible(false)} />;
  }

  return (
    <div className="bg-white dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 font-sans transition-colors duration-300 relative overflow-x-hidden">
      <BackgroundAnimations />
      
      {isRegistrationVisible ? (
        <>
          <RegistrationForm closeForm={() => setRegistrationVisible(false)} />
          <Footer openDashboard={() => setDashboardVisible(true)} />
        </>
      ) : (
        <>
          <Header openRegistration={() => setRegistrationVisible(true)} />
          <CreatorBanner />
          <main>
            <Hero openRegistration={() => setRegistrationVisible(true)}/>
            <About />
            <Programs />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer openDashboard={() => setDashboardVisible(true)} />
        </>
      )}
    </div>
  );
}
