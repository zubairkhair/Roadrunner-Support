
import React from 'react';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../constants';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Headset } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white cursor-pointer" onClick={() => onNavigate('home')}>
              <Headset className="h-7 w-7 text-blue-400" />
              <span className="text-xl font-bold tracking-tight">Roadrunner<span className="text-blue-400">Support</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing top-notch customer assistance across the United States. Our mission is to ensure every query is met with expert guidance and quick solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-blue-400 transition-colors">Recent News</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Contact Support</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Technical Support</li>
              <li>Billing Assistance</li>
              <li>Account Management</li>
              <li>Product Troubleshooting</li>
              <li>Corporate Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="hover:text-blue-400 font-bold">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-blue-400">{EMAIL}</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Roadrunner Support +1760-284-5760 | Assistance USA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
