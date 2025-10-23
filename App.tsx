
import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SchoolLife from './components/sections/SchoolLife';
import Programs from './components/sections/Programs';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Map from './components/sections/Map';
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
      
      <Header 
        openRegistration={() => setRegistrationVisible(true)}
        closeRegistration={() => setRegistrationVisible(false)}
        isRegistrationVisible={isRegistrationVisible}
      />

      {isRegistrationVisible ? (
        <RegistrationForm closeForm={() => setRegistrationVisible(false)} hideHeader={true} />
      ) : (
        <main>
          <Hero openRegistration={() => setRegistrationVisible(true)}/>
          <About />
          <SchoolLife />
          <Programs />
          <Testimonials />
          <FAQ />
          <Contact />
          <Map />
        </main>
      )}

      <Footer openDashboard={() => setDashboardVisible(true)} />
    </div>
  );
}