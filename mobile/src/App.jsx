import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuoteStepper from './components/QuoteStepper';
import CarrierSignup from './components/CarrierSignup';
import About from './components/About';
import Contact from './components/Contact';
import FloatingMenu from './components/FloatingMenu';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Support from './components/Support';
import Layout from './components/Layout';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('welcome');

  const handleNavigation = (screen) => {
    setActiveScreen(screen);
  };

  const renderContent = () => {
    switch (activeScreen) {
      case 'welcome':
        return <WelcomeScreen onStartQuote={() => handleNavigation('quote')} />;
      case 'quote':
        return <QuoteStepper />;
      case 'carrier':
        return <CarrierSignup />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      case 'partners':
        return <Partners />;
      case 'support':
        return <Support />;
      default:
        return <WelcomeScreen onStartQuote={() => handleNavigation('quote')} />;
    }
  }

  return (
    <Layout
      onBackClick={() => handleNavigation('welcome')}
      navigate={handleNavigation}
    >
      {renderContent()}
    </Layout>
  );
}








//     <div className="app">
//       {activeScreen === 'welcome' && (
//         <WelcomeScreen
//           onStartQuote={() => handleNavigation('quote')}
//           onSignup={() => handleNavigation('carrier')}
//           onAbout={() => handleNavigation('about')}
//           onContact={() => handleNavigation('contact')}
//           onFAQ={() => handleNavigation('faq')}
//           onPartners={() => handleNavigation('partners')}
//           onCall={() => window.location.href = 'tel:+15613212756'}
//           onSupport={() => handleNavigation('support')}
//           onHome={() => handleNavigation('welcome')}
//         />
//       )}
//       {activeScreen === 'quote' && <QuoteStepper />}
//       {activeScreen === 'carrier' && <CarrierSignup />}
//       {activeScreen === 'about' && <About />}
//       {activeScreen === 'contact' && <Contact />}
//       {activeScreen === 'faq' && <FAQ />}
//       {activeScreen === 'partners' && <Partners />}
//       {activeScreen === 'carriers' && <Carriers />}
//       {activeScreen === 'support' && <Support />}

//       <div className='footer'>
//         <p>© 2023 DB9 Logistics. All rights reserved.</p>
//         <a href="https://www.db9logistics.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>  |  <a href="https://www.db9logistics.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
//       </div>

//       {/* Floating menu for navigation */}
//       <FloatingMenu navigate={handleNavigation} />
//     </div>
//   );
// }