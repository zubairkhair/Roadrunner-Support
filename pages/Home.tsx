
import React from 'react';
import { PHONE_NUMBER, SERVICES, TESTIMONIALS } from '../constants';
import { Phone, ArrowRight, ShieldCheck, Clock, Zap, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
                <ShieldCheck size={16} />
                <span>USA Trusted Assistance</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                Your Reliable Partner for <span className="text-blue-600">USA Support</span>.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Providing top-notch customer service across the United States. Technical, billing, or account issues—we solve them all. Just dial for expert assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                  className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1"
                >
                  <Phone size={24} />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => onNavigate('services')}
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="h-10 w-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">50,000+ Satisfied Customers</p>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 scale-95 opacity-5"></div>
              <img 
                src="https://picsum.photos/seed/support-team/800/600" 
                alt="Support Team" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Zap className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Fast Response</p>
                  <p className="text-lg font-bold text-gray-900">&lt; 3 Min Wait Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-sm text-gray-500 font-medium">Available Support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">99.9%</p>
              <p className="text-sm text-gray-500 font-medium">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">50 States</p>
              <p className="text-sm text-gray-500 font-medium">Nationwide Service</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">10min</p>
              <p className="text-sm text-gray-500 font-medium">Avg Resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Do</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">Expert Solutions for Your Support Needs</h3>
            <p className="text-gray-600 text-lg">We provide a comprehensive range of assistance services designed to help you navigate through any technical or account hurdle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Zap className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-blue-600 font-bold text-sm flex items-center space-x-2 hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/seed/features/800/800" alt="Features" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">Why Millions Trust Roadrunner Support</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Immediate Help</h4>
                    <p className="text-gray-600">No more waiting for hours on hold. Our optimized routing ensures you get a human assistant in minutes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <ShieldCheck className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Secure & Confidential</h4>
                    <p className="text-gray-600">Your data privacy is our priority. All interactions are protected under the highest security standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Expert Knowledge</h4>
                    <p className="text-gray-600">Our support staff undergo rigorous training across all major tech platforms used in the USA.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  Join the Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white/80 font-bold uppercase tracking-widest text-sm">Testimonials</h2>
            <h3 className="text-4xl font-extrabold text-white">What Our Customers Say</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
                <p className="text-lg italic mb-6">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full border-2 border-blue-400" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-blue-200 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-900 rounded-[3rem] p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-extrabold text-white">Ready to Solve Your Support Issues?</h2>
            <p className="text-xl text-gray-400">Our team is standing by to assist you. Don't wait—get the help you need today across the USA.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-blue-500/20"
              >
                <Phone size={24} />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl transition-all"
              >
                Contact Us Online
              </button>
            </div>
            <p className="text-gray-500 text-sm font-medium">Available 24 hours a day, 7 days a week.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
