
import React from 'react';
import { PHONE_NUMBER } from '../constants';
import { Heart, Target, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Roadrunner Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A nationwide leader in customer assistance, Roadrunner Support provides reliable, efficient, and compassionate help for all your digital and physical product needs across the USA.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in Austin, Texas, Roadrunner Support began with a simple goal: to eliminate the frustration of automated phone systems and provide real, expert help to people across the USA. We believe that technology should serve people, not the other way around.
                </p>
                <p>
                  Today, we serve millions of customers from Maine to Hawaii. Our commitment to excellence is reflected in our 24/7 availability and our dedication to continuous staff training. When you call us at <strong>{PHONE_NUMBER}</strong>, you aren't just getting an agent—you're getting a partner in problem-solving.
                </p>
                <p>
                  Our vision is to become the primary helpline for every household in America, known for our speed, reliability, and human-first approach to technical assistance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-8 rounded-3xl space-y-4">
                <Heart className="text-blue-600 h-10 w-10" />
                <h4 className="font-bold text-gray-900">Empathy</h4>
                <p className="text-sm text-gray-600">We understand your frustration and work with patience to resolve every issue.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl space-y-4">
                <Target className="text-gray-900 h-10 w-10" />
                <h4 className="font-bold text-gray-900">Precision</h4>
                <p className="text-sm text-gray-600">Accuracy is key. We provide proven solutions that fix the root cause.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl space-y-4">
                <Users className="text-gray-900 h-10 w-10" />
                <h4 className="font-bold text-gray-900">Community</h4>
                <p className="text-sm text-gray-600">Building lasting relationships with our customers across the nation.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-3xl space-y-4">
                <Globe className="text-blue-600 h-10 w-10" />
                <h4 className="font-bold text-gray-900">Nationwide</h4>
                <p className="text-sm text-gray-600">Coverage in every state, every city, every hour of every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Ready to talk to us?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Our team of experts is waiting to assist you with any questions or concerns you might have.
          </p>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-2xl transition-all"
          >
            <span>Call us at {PHONE_NUMBER}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
