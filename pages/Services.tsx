
import React from 'react';
import { PHONE_NUMBER, SERVICES } from '../constants';
import { CheckCircle2, Phone, Mail, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-40 pb-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl font-extrabold">Professional Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive assistance solutions tailored for individual and corporate needs. Explore our range of services below.
          </p>
          <div className="pt-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Get Immediate Support: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img 
                  src={`https://picsum.photos/seed/service${service.id}/800/600`} 
                  alt={service.title} 
                  className="rounded-3xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {['24/7 Availability', 'Expert Technicians', 'Nationwide Coverage', 'Secure Remote Assistance'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                    className="inline-flex items-center space-x-2 text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors"
                  >
                    <span>Request this service</span>
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-gray-100 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-gray-900">Can't find what you're looking for?</h2>
              <p className="text-gray-600 text-lg">Our team handles custom support requests as well. Reach out to our customer support team for personalized assistance.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Helpline</p>
                    <p className="text-xl font-bold text-gray-900">{PHONE_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Email Support</p>
                    <p className="text-xl font-bold text-gray-900">support@roadrunnersupport.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Send an Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
