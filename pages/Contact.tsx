
import React from 'react';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../constants';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl font-extrabold text-gray-900">Contact Roadrunner Support</h1>
            <p className="text-xl text-gray-600">Reach out to us today across the USA. We are ready to listen and assist with all your support needs.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Send an Inquiry</h2>
                <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Account Assistance</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea rows={6} className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl flex items-center justify-center space-x-3 shadow-xl shadow-blue-200 transition-all">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-gray-900">Direct Contact</h3>
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg"><Phone size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Helpline Number</p>
                      <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="bg-white text-blue-600 p-3 rounded-2xl shadow-lg"><Mail size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email Address</p>
                      <a href={`mailto:${EMAIL}`} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="bg-white text-blue-600 p-3 rounded-2xl shadow-lg"><MapPin size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Physical Address</p>
                      <p className="text-xl font-bold text-gray-900">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="bg-white text-blue-600 p-3 rounded-2xl shadow-lg"><Clock size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Working Hours</p>
                      <p className="text-xl font-bold text-gray-900">24/7 Available across the USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-gray-900">Follow Our Updates</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 p-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/map/1920/400" 
          alt="Map Placeholder" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center space-x-4">
             <div className="bg-blue-600 p-3 rounded-2xl text-white"><MapPin /></div>
             <div>
               <p className="font-extrabold text-gray-900">Roadrunner Support HQ</p>
               <p className="text-sm text-gray-500">Austin, Texas, USA</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
