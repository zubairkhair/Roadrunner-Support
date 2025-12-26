
import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIHelp from './components/AIHelp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  // Use hash-based navigation state
  const [currentPath, setCurrentPath] = useState<PageRoute>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') as PageRoute;
      if (['home', 'about', 'services', 'blog', 'contact'].includes(hash)) {
        setCurrentPath(hash);
        updateMeta(hash);
      } else {
        setCurrentPath('home');
        updateMeta('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const updateMeta = (path: string) => {
    const metas: Record<string, { title: string; description: string }> = {
      home: {
        title: "Roadrunner Support +1760-284-5760 | Assistance USA",
        description: "Welcome to Roadrunner Support! Providing top-notch customer service across the USA. Just dial +1 (760)-284-5760 for quick and efficient support."
      },
      about: {
        title: "About Roadrunner Support | Assistance USA",
        description: "Learn more about Roadrunner Support – your reliable customer assistance provider across the USA. Call +1 (760)-284-5760 for more details."
      },
      services: {
        title: "Roadrunner Support Services +1760-284-5760 | Assistance USA",
        description: "Explore the range of services provided by Roadrunner Support, offering reliable customer assistance across the USA. Call +1 (760)-284-5760 for personalized support."
      },
      blog: {
        title: "Roadrunner Support Blog | +1760-284-5760 | Assistance USA",
        description: "Read helpful tips and insights from Roadrunner Support on customer service, troubleshooting, and more. Call +1 (760)-284-5760 for immediate assistance."
      },
      contact: {
        title: "Contact Roadrunner Support | Assistance USA",
        description: "Reach out to Roadrunner Support today! Call us at +1 (760)-284-5760 for immediate assistance or fill out the form for inquiries."
      }
    };

    const config = metas[path] || metas.home;
    document.title = config.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.description);
  };

  const handleNavigate = (path: string) => {
    window.location.hash = `/${path}`;
  };

  const renderPage = () => {
    switch (currentPath) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Gemini AI Floating Assistant */}
      <AIHelp />

      {/* Floating Call Button for Mobile */}
      <a
        href="tel:+17602845760"
        className="md:hidden fixed bottom-6 left-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
