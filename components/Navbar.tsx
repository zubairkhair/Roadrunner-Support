
import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';
import { Menu, X, Phone, Headset } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <Headset className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">Roadrunner<span className="text-blue-600">Support</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`${
                  currentPath === item.path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500'
                } transition-colors duration-200 text-sm font-medium uppercase tracking-wide`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-blue-200 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold">{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-3 py-4 rounded-lg font-bold"
              >
                <Phone className="h-5 w-5" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
