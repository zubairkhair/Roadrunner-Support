
import React from 'react';
import { BLOG_POSTS, PHONE_NUMBER } from '../constants';
// Added Phone to the imports to resolve the reference error
import { Calendar, User, ArrowRight, Search, Phone } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-5xl font-extrabold text-gray-900">Roadrunner Support Blog</h1>
              <p className="text-xl text-gray-600">Expert tips, troubleshooting guides, and latest updates from our support team across the USA.</p>
            </div>
            <div className="relative w-full lg:w-96">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="flex flex-col h-full bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Customer Help
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center text-xs text-gray-400 space-x-4">
                    <span className="flex items-center space-x-1"><Calendar size={14} /> <span>{post.date}</span></span>
                    <span className="flex items-center space-x-1"><User size={14} /> <span>{post.author}</span></span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <button className="text-blue-600 font-bold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                   <span className="text-gray-400">Need immediate help?</span>
                   <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-blue-600">{PHONE_NUMBER}</a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold">1</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">Next</button>
            </nav>
          </div>
        </div>
      </section>

      {/* Featured Helpline section for Blog */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-3xl font-extrabold">Have a specific question?</h2>
          <p className="text-xl text-blue-100">Our blog covers many topics, but for real-time problem solving, our helpline is always the fastest option.</p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-6">
             <div className="flex items-center justify-center space-x-3 text-2xl font-bold">
               <Phone />
               <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}>{PHONE_NUMBER}</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
