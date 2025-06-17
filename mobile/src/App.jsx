import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuoteStepper from './components/QuoteStepper';
import CarrierSignup from './components/CarrierSignup';
import FloatingMenu from './components/FloatingMenu';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Support from './components/Support';
import MenuModal from './components/MenuModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('welcome');

  const handleNavigation = (screen) => {
    setActiveScreen(screen);
  };

  return (
    <div className="app">
      {activeScreen === 'welcome' && (
        <WelcomeScreen
          onStartQuote={() => handleNavigation('quote')}
          onSignup={() => handleNavigation('carrier')}
          onAbout={() => handleNavigation('about')}
          onContact={() => handleNavigation('contact')}
          onFAQ={() => handleNavigation('faq')}
          onPartners={() => handleNavigation('partners')}
          onSupport={() => handleNavigation('support')}
          onMenu={() => handleNavigation('menu')}
          navigate={handleNavigation}
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
          handleNavigation={handleNavigation}
          onClose={() => setActiveScreen('welcome')}
        />
      )}
      {activeScreen === 'quote' && <QuoteStepper />}
      {activeScreen === 'carrier' && <CarrierSignup />}
      {activeScreen === 'about' && <About />}
      {activeScreen === 'contact' && <Contact />}
      {activeScreen === 'faq' && <FAQ />}
      {activeScreen === 'partners' && <Partners />}
      {activeScreen === 'support' && <Support />}
      {activeScreen === 'menu' && (
        <MenuModal
          onClose={() => setActiveScreen('welcome')}
          navigate={handleNavigation}
        />
      )}
      <div className="modal-container">
        <MenuModal
          onClose={() => setActiveScreen('welcome')}
          navigate={handleNavigation}
        />
      </div>

      <div className="footer">
        <p>&copy; 2023 DB9 Logistics. All rights reserved.</p>
        <a href="terms.html">Terms of Service</a> | <a href="privacy.html">Privacy Policy</a>
      </div>

      <FloatingMenu navigate={handleNavigation} />
      <div className="content" id="main-content" role="region" aria-labelledby="main-content">
        {activeScreen === 'welcome' && <WelcomeScreen />}
        {activeScreen === 'quote' && <QuoteStepper />}
        {activeScreen === 'carrier' && <CarrierSignup />}
        {activeScreen === 'about' && <About />}
        {activeScreen === 'contact' && <Contact />}
        {activeScreen === 'faq' && <FAQ />}
        {activeScreen === 'partners' && <Partners />}
        {activeScreen === 'support' && <Support />}
        {activeScreen === 'menu' && <MenuModal onClose={() => setActiveScreen('welcome')} />}
      </div>
      
    </div>
  );
}